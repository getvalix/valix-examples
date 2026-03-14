/**
 * Batch endpoint — requires API key.
 * Up to 100 identifiers per request.
 *
 * Run: VALIX_API_KEY=vx_live_... node batch.js
 */
import { Valix, ValixAuthError, ValixRateLimitError } from "@valix/sdk";

const apiKey = process.env.VALIX_API_KEY;
if (!apiKey) {
  console.error("Error: set the VALIX_API_KEY environment variable");
  process.exit(1);
}

const valix = new Valix({ apiKey });

try {
  // Single identifier
  const single = await valix.validate("12345678Z");
  console.log("Single validation:");
  console.log(`  ${single.valid ? "✓" : "✗"} ${single.value} → ${single.detected_type} (${single.formatted})`);
  console.log();

  // Batch
  const batch = await valix.batch([
    { value: "12345678Z", type: "NIF" },
    { value: "X1234567L", type: "NIE" },
    { value: "A12345674", type: "CIF" },
    { value: "ES9121000418450200051332", type: "IBAN" },
    { value: "INVALID123", type: "AUTO" },
  ]);

  console.log(`Batch validation — ${batch.valid_count}/${batch.total} valid:`);
  for (const result of batch.results) {
    const status = result.valid ? "✓" : "✗";
    const formatted = result.formatted ?? "—";
    console.log(`  ${status} ${result.value} → ${result.detected_type} (${formatted})`);
    if (result.errors.length > 0) {
      console.log(`    Errors: ${result.errors.join(", ")}`);
    }
  }
} catch (error) {
  if (error instanceof ValixAuthError) {
    console.error("Invalid API key");
  } else if (error instanceof ValixRateLimitError) {
    console.error("Plan limit reached");
  } else {
    console.error(error.message);
  }
  process.exit(1);
}
