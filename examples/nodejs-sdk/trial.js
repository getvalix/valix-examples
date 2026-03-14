/**
 * Trial endpoint — no API key required.
 * Up to 50 validations per day per IP.
 *
 * Run: node trial.js
 */
import { trial } from "@valix/sdk";

const response = await trial([
  { value: "12345678Z" },
  { value: "X1234567L" },
  { value: "A12345674" },
  { value: "ES9121000418450200051332" },
]);

console.log(`Total: ${response.total}`);
console.log(`Valid: ${response.valid_count}`);
console.log(`Invalid: ${response.invalid_count}`);
console.log();

for (const result of response.results) {
  const status = result.valid ? "✓" : "✗";
  const formatted = result.formatted ?? "—";
  console.log(`${status} ${result.input} → ${result.type} (${formatted})`);
  if (result.errors.length > 0) {
    console.log(`  Errors: ${result.errors.join(", ")}`);
  }
}
