import { getPorts, getCategories } from "./data.ts";
import { generateReadme } from "./readme.ts";

const ports = await getPorts();
const categories = await getCategories();

await generateReadme(ports, categories);

console.log("✅ Generation complete.");
