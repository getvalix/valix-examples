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
  -d '{"items": [{"value": "48488584F", "type": "NIF"}]}'
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
      "value": "48488584F",
      "detected_type": "NIF",
      "valid": true,
      "formatted": "48488584F",
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
  -d '{"items": [{"value": "48488584F", "type": "AUTO"}]}'
```

**Example with multiple identifiers:**
```bash
curl -X POST https://api.getvalix.io/v1/validate/trial \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"value": "48488584F", "type": "NIF"},
      {"value": "ES1814650100981713109282", "type": "IBAN"},
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

Full documentation at [getvalix.io](https://getvalix.io).

## Free Trial

Test the API without registration at [getvalix.io](https://getvalix.io) or use the trial endpoint directly:
```
POST https://api.getvalix.io/v1/validate/trial
```

10 free validations per day. No API key required.

## License

MIT
