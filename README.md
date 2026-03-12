# Valix Examples

Examples and integrations for the [Valix API](https://getvalix.io) — Spanish fiscal identifier validation (NIF, NIE, CIF, IBAN).

## What is Valix?

Valix is a REST API that validates Spanish fiscal identifiers in a single request. No need to implement and maintain validation algorithms yourself.

**Supported identifiers:**
- NIF (Número de Identificación Fiscal)
- NIE (Número de Identidad de Extranjero)
- CIF (Código de Identificación Fiscal)
- IBAN (International Bank Account Number)

## Quick Start
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{"items": [{"value": "12345678Z", "type": "NIF"}]}'
```

Response:
```json
{
  "total": 1,
  "valid_count": 1,
  "invalid_count": 0,
  "results": [
    {
      "index": 0,
      "value": "12345678Z",
      "detected_type": "NIF",
      "valid": true,
      "formatted": "12345678Z",
      "errors": []
    }
  ]
}
```

## Identifier Types

The `type` field accepts the following values:

| Value | Description |
|-------|-------------|
| `AUTO` | Automatic detection (recommended) |
| `NIF` | Número de Identificación Fiscal |
| `NIE` | Número de Identidad de Extranjero |
| `CIF` | Código de Identificación Fiscal |
| `IBAN` | International Bank Account Number |

**Example with automatic detection:**
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{"items": [{"value": "12345678Z", "type": "AUTO"}]}'
```

**Example with multiple identifiers:**
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"value": "12345678Z", "type": "NIF"},
      {"value": "ES9121000418450200051332", "type": "IBAN"},
      {"value": "X1234567L", "type": "AUTO"}
    ]
  }'
```

## Examples

- [curl](examples/curl/)
- [Python](examples/python/)
- [JavaScript](examples/javascript/)
- [PHP](examples/php/)

## API Reference

Learn more at [getvalix.io](https://getvalix.io).

## Free Trial

Test the API without registration at [getvalix.io](https://getvalix.io) or use the trial endpoint directly:
```
POST https://api.getvalix.io/v1/validate/trial
```

50 free validations per day. No API key required.

## Pruébalo en Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://web.postman.co/workspace/My-Workspace~a85a198c-5301-487c-8394-976d83a8c5a5/collection/6285307-6c0c20f9-4cb0-4baf-b2c7-5c328d12ed3f?action=share&source=copy-link&creator=6285307)

## License

MIT
