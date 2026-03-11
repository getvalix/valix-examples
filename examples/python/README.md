# Python Examples

## Installation
```bash
pip install requests
```

## Validate a single identifier
```python
import requests

url = "https://api.getvalix.io/v1/validate/trial"
payload = {
    "items": [
        {"value": "12345678Z", "type": "NIF"}
    ]
}

response = requests.post(url, json=payload)
result = response.json()
print(result)
```

## Validate multiple identifiers
```python
import requests

url = "https://api.getvalix.io/v1/validate/trial"
payload = {
    "items": [
        {"value": "12345678Z", "type": "NIF"},
        {"value": "X1234567L", "type": "NIE"},
        {"value": "ES9121000418450200051332", "type": "IBAN"}
    ]
}

response = requests.post(url, json=payload)
result = response.json()

for item in result["results"]:
    status = "valid" if item["valid"] else "invalid"
    print(f"{item['value']} ({item['detected_type']}): {status}")
```

## Authenticated endpoint (requires API key)
```python
import requests

url = "https://api.getvalix.io/v1/validate/batch"
headers = {
    "x-api-key": "your_api_key"
}
payload = {
    "items": [
        {"value": "12345678Z", "type": "NIF"},
        {"value": "ES9121000418450200051332", "type": "IBAN"}
    ]
}

response = requests.post(url, json=payload, headers=headers)
result = response.json()
print(result)
```

## Get started

Sign up at [getvalix.io](https://getvalix.io) to get your API key.
