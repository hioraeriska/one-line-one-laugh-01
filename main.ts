// One Line, One Laugh — a program that writes one funny line to /output/entry.txt.
// The joke is a fixed, hand-written line: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday self-insult + one vivid simile: the microwave that will not stop
// reminding me, like a tiny manager who thinks I forgot I was hungry.
const JOKE =
  "My microwave beeps when the food is done, then beeps again every minute, like a tiny manager who thinks I forgot I was hungry.";

// The gate accepts 1-200 characters of non-whitespace text only. Refuse to
// write an invalid entry instead of silently scoring 0.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
