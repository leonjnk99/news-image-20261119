// Entry program for the make.fun news-image-20261119 competition.
//
// The image is drawn once and shipped in this repository as entry.png.
// All this program does is place an exact copy of it at the path the
// harness expects, so both graded runs write identical bytes.

// The program needs no network and no randomness: copying the same
// shipped file twice always produces the same bytes, which is what the
// competition's two-run rule requires.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetFile = join(targetDir, "entry.png");

mkdirSync(targetDir, { recursive: true });
copyFileSync(join(here, "entry.png"), targetFile);
