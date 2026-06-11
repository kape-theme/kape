import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Port, Category } from "./data.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

const START_MARKER = "<!-- AUTOGEN:PORTLIST START -->";
const END_MARKER = "<!-- AUTOGEN:PORTLIST END -->";

// ─── Generator ───────────────────────────────────────────────────────────────

function generatePortList(
  ports: Record<string, Port>,
  categories: Category[]
): string {
  const lines: string[] = [""];

  for (const category of categories) {
    const categoryPorts = Object.entries(ports).filter(([, port]) =>
      port.categories.includes(category.key)
    );

    if (categoryPorts.length === 0) continue;

    lines.push(`<details>`);
    lines.push(`<summary>${category.emoji} ${category.name}</summary>`);
    lines.push(``);
    lines.push(`| App | Repository | Platforms |`);
    lines.push(`|---|---|---|`);

    for (const [, port] of categoryPorts) {
      const platforms = port.platform
        .map((p) => {
          if (p === "linux") return "🐧";
          if (p === "macos") return "🍎";
          if (p === "windows") return "🪟";
          return p;
        })
        .join(" ");
      const repoSlug = port.url.split("/").slice(-2).join("/");
      lines.push(`| **${port.name}** | [${repoSlug}](${port.url}) | ${platforms} |`);
    }

    lines.push(``);
    lines.push(`</details>`);
    lines.push(``);
  }

  return lines.join("\n");
}

// ─── Entry ───────────────────────────────────────────────────────────────────

export async function generateReadme(
  ports: Record<string, Port>,
  categories: Category[]
): Promise<void> {
  const readmePath = resolve(root, "README.md");
  const content = readFileSync(readmePath, "utf-8");

  const startIndex = content.indexOf(START_MARKER);
  const endIndex = content.indexOf(END_MARKER);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(
      `README.md is missing AUTOGEN markers.\n` +
        `Expected to find:\n  ${START_MARKER}\n  ${END_MARKER}`
    );
  }

  const before = content.slice(0, startIndex + START_MARKER.length);
  const after = content.slice(endIndex);
  const generated = generatePortList(ports, categories);

  const updated = `${before}\n${generated}${after}`;
  writeFileSync(readmePath, updated, "utf-8");
  console.log("📝 README.md updated with", Object.keys(ports).length, "ports.");
}
