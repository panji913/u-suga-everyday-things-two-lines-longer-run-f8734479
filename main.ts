// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation of a queue to /output/entry.txt.
// Line 1: one vivid sentence, a single analogy (a queue as a slow train
// made of people), explaining a queue to a 10-year-old.
// Line 2: one sentence saying what the analogy maps and what it leaves out.
// Gate: UTF-8 text, 1-400 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A queue is a slow train made of people, where each person is a carriage holding the spot behind the one in front.\n" +
  "It maps the order and the waiting — everyone moves only when the person ahead moves — but it leaves out that carriages never get bored, choose a different line, or let someone cut in front.\n";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
