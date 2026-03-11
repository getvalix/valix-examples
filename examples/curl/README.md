# curl Examples

## Validate a single identifier
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{"items": [{"value": "12345678Z", "type": "NIF"}]}'
```

## Validate multiple identifiers
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"value": "12345678Z", "type": "NIF"},
      {"value": "X1234567L", "type": "NIE"},
      {"value": "ES9121000418450200051332", "type": "IBAN"}
    ]
  }'
```

## Validate with automatic detection
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{"items": [{"value": "12345678Z", "type": "AUTO"}]}'
```

## Authenticated endpoint (requires API key)
```bash
curl -X POST https://api.getvalix.io/v1/validate/batch \
  -H "Content-Type: application/json" \
  -H "x-api-key: your_api_key" \
  -d '{
    "items": [
      {"value": "12345678Z", "type": "NIF"},
      {"value": "ES9121000418450200051332", "type": "IBAN"}
    ]
  }'
```

## Get started

Sign up at [getvalix.io](https://getvalix.io) to get your API key.
