import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Maintainer {
  username: string;
}

export interface Port {
  name: string;
  categories: string[];
  platform: string[];
  url: string;
  "current-maintainers": Maintainer[];
}

export interface PortsFile {
  collaborators?: Record<string, Maintainer>;
  ports: Record<string, Port>;
}

export interface Category {
  key: string;
  name: string;
  description: string;
  emoji: string;
}

// ─── Loaders ─────────────────────────────────────────────────────────────────

export async function getPorts(): Promise<Record<string, Port>> {
  const raw = readFileSync(resolve(root, "resources/ports.yml"), "utf-8");
  const data = yaml.load(raw) as PortsFile;
  return data.ports;
}

export async function getCategories(): Promise<Category[]> {
  const raw = readFileSync(resolve(root, "resources/categories.yml"), "utf-8");
  return yaml.load(raw) as Category[];
}
