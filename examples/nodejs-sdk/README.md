# Node.js SDK Examples

Examples using the official [`@valix/sdk`](https://www.npmjs.com/package/@valix/sdk) for Node.js.

## Setup

```bash
npm install
```

## Trial (no API key required)

```bash
node trial.js
```

Output:
```
Total: 4
Valid: 4
Invalid: 0

✓ 12345678Z → NIF (12345678-Z)
✓ X1234567L → NIE (X-1234567-L)
✓ A12345674 → CIF (A-12345674)
✓ ES9121000418450200051332 → IBAN (ES91 2100 0418 4502 0005 1332)
```

## Batch (API key required)

```bash
VALIX_API_KEY=vx_live_... node batch.js
```

## Usage in your project

```bash
npm install @valix/sdk
```

```javascript
import { Valix, trial } from "@valix/sdk";

// Without API key (trial)
const result = await trial([{ value: "12345678Z" }]);

// With API key (production)
const valix = new Valix({ apiKey: process.env.VALIX_API_KEY });
const single = await valix.validate("12345678Z");
const batch  = await valix.batch([
  { value: "12345678Z", type: "NIF" },
  { value: "X1234567L", type: "NIE" },
]);
```

Requires Node.js 18+. Full TypeScript support included.

Get your API key at [getvalix.io](https://getvalix.io).
