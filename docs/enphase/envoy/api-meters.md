# Enphase Envoy API Endpoint - /ivp/meters

* `http://[address]/ivp/meters`

## Example Payload

```json

[
    {
        "eid": 704643328,
        "state": "enabled",
        "measurementType": "production",
        "phaseMode": "three",
        "phaseCount": 1,
        "meteringStatus": "normal",
        "statusFlags": []
    },
    {
        "eid": 704643584,
        "state": "enabled",
        "measurementType": "net-consumption",
        "phaseMode": "three",
        "phaseCount": 1,
        "meteringStatus": "normal",
        "statusFlags": []
    }
]

```