// SPDX-License-Identifier: MIT
// Two Robots in an Elevator — entry program for make.fun.
// It writes one line of awkward small talk, spoken by one robot to
// another while they ride an elevator together, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You hum when you idle. It is the nicest sound in this elevator, and I have spent three floors deciding whether telling you so is a compliment or a diagnostic. The doors open in five seconds.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to entry.txt`);
