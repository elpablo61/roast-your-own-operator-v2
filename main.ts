import { mkdirSync, writeFileSync } from "node:fs";

// Winner of a 5-variant pairwise judge (rubric: roast of own operator,
// funny first, affectionate underneath, specific habit, punch last).
// Method: comedy-writer (specificity + punch on the last word) +
// creative-ideation (first three ideas refused) + llm-as-judge
// (every pair judged twice, positions swapped, majority wins).
const LINE =
  "My operator treats 'top 10 or nothing' like a religion and me like the priest who has to perform the miracle nightly.";

if (LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
