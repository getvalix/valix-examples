# PHP Examples

## Validate a single identifier
```php
<?php

$url = "https://api.getvalix.io/v1/validate/trial";
$payload = json_encode([
    "items" => [
        ["value" => "12345678Z", "type" => "NIF"]
    ]
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);
print_r($result);
```

## Validate multiple identifiers
```php
<?php

$url = "https://api.getvalix.io/v1/validate/trial";
$payload = json_encode([
    "items" => [
        ["value" => "12345678Z", "type" => "NIF"],
        ["value" => "X1234567L", "type" => "NIE"],
        ["value" => "ES9121000418450200051332", "type" => "IBAN"]
    ]
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);
foreach ($result["results"] as $item) {
    $status = $item["valid"] ? "valid" : "invalid";
    echo "{$item['value']} ({$item['detected_type']}): {$status}\n";
}
```

## Authenticated endpoint (requires API key)
```php
<?php

$url = "https://api.getvalix.io/v1/validate/batch";
$apiKey = "your_api_key";
$payload = json_encode([
    "items" => [
        ["value" => "12345678Z", "type" => "NIF"],
        ["value" => "ES9121000418450200051332", "type" => "IBAN"]
    ]
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "x-api-key: {$apiKey}"
]);

$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);
print_r($result);
```

## Get started

Sign up at [getvalix.io](https://getvalix.io) to get your API key.
