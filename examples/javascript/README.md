# JavaScript Examples

## Validate a single identifier
```javascript
const response = await fetch("https://api.getvalix.io/v1/validate/trial", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    items: [
      { value: "12345678Z", type: "NIF" }
    ]
  })
});

const result = await response.json();
console.log(result);
```

## Validate multiple identifiers
```javascript
const response = await fetch("https://api.getvalix.io/v1/validate/trial", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    items: [
      { value: "12345678Z", type: "NIF" },
      { value: "X1234567L", type: "NIE" },
      { value: "ES9121000418450200051332", type: "IBAN" }
    ]
  })
});

const result = await response.json();
result.results.forEach(item => {
  const status = item.valid ? "valid" : "invalid";
  console.log(`${item.value} (${item.detected_type}): ${status}`);
});
```

## Authenticated endpoint (requires API key)
```javascript
const response = await fetch("https://api.getvalix.io/v1/validate/batch", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "your_api_key"
  },
  body: JSON.stringify({
    items: [
      { value: "12345678Z", type: "NIF" },
      { value: "ES9121000418450200051332", type: "IBAN" }
    ]
  })
});

const result = await response.json();
console.log(result);
```

## Node.js (using node-fetch)
```bash
npm install node-fetch
```
```javascript
import fetch from "node-fetch";

const response = await fetch("https://api.getvalix.io/v1/validate/trial", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    items: [{ value: "12345678Z", type: "AUTO" }]
  })
});

const result = await response.json();
console.log(result);
```

## Get started

Sign up at [getvalix.io](https://getvalix.io) to get your API key.
