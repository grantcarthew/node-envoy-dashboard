# Enphase Envoy API Endpoint - /api/v1/production

* `http://[address]/api/v1/production`
* `http://[address]/api/v1/production/inverters?locale=en&user=envoy&password=[password]`

_Note: The password in the second link is the last six digits of the device serial number._

## Example Payload /production

```json

{
  "wattHoursToday": 19580,
  "wattHoursSevenDays": 225167,
  "wattHoursLifetime": 1034886,
  "wattsNow": 5170
}

```

## Example Payload /production/inverters

```json

[
  {
    "serialNumber": "121827033959",
    "lastReportDate": 1550543001,
    "devType": 1,
    "lastReportWatts": 259,
    "maxReportWatts": 302
  },
  {
    "serialNumber": "121827034126",
    "lastReportDate": 1550543007,
    "devType": 1,
    "lastReportWatts": 258,
    "maxReportWatts": 302
  },
  {
    "serialNumber": "121827034026",
    "lastReportDate": 1550542999,
    "devType": 1,
    "lastReportWatts": 265,
    "maxReportWatts": 302
  },
  {
    "serialNumber": "121827034339",
    "lastReportDate": 1550543004,
    "devType": 1,
    "lastReportWatts": 262,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827033952",
    "lastReportDate": 1550543008,
    "devType": 1,
    "lastReportWatts": 234,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827034181",
    "lastReportDate": 1550543021,
    "devType": 1,
    "lastReportWatts": 260,
    "maxReportWatts": 301
  },
  {
    "serialNumber": "121827034131",
    "lastReportDate": 1550543016,
    "devType": 1,
    "lastReportWatts": 266,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827034024",
    "lastReportDate": 1550543022,
    "devType": 1,
    "lastReportWatts": 264,
    "maxReportWatts": 300
  },
  {
    "serialNumber": "121827030433",
    "lastReportDate": 1550543003,
    "devType": 1,
    "lastReportWatts": 259,
    "maxReportWatts": 301
  },
  {
    "serialNumber": "121827034025",
    "lastReportDate": 1550543018,
    "devType": 1,
    "lastReportWatts": 264,
    "maxReportWatts": 304
  },
  {
    "serialNumber": "121827034113",
    "lastReportDate": 1550543012,
    "devType": 1,
    "lastReportWatts": 262,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827028419",
    "lastReportDate": 1550543025,
    "devType": 1,
    "lastReportWatts": 265,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827033979",
    "lastReportDate": 1550543024,
    "devType": 1,
    "lastReportWatts": 254,
    "maxReportWatts": 302
  },
  {
    "serialNumber": "121827028418",
    "lastReportDate": 1550543020,
    "devType": 1,
    "lastReportWatts": 235,
    "maxReportWatts": 299
  },
  {
    "serialNumber": "121827033955",
    "lastReportDate": 1550543016,
    "devType": 1,
    "lastReportWatts": 259,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827028415",
    "lastReportDate": 1550542998,
    "devType": 1,
    "lastReportWatts": 268,
    "maxReportWatts": 302
  },
  {
    "serialNumber": "121827034023",
    "lastReportDate": 1550543005,
    "devType": 1,
    "lastReportWatts": 262,
    "maxReportWatts": 300
  },
  {
    "serialNumber": "121827034095",
    "lastReportDate": 1550543011,
    "devType": 1,
    "lastReportWatts": 270,
    "maxReportWatts": 303
  },
  {
    "serialNumber": "121827034029",
    "lastReportDate": 1550543009,
    "devType": 1,
    "lastReportWatts": 269,
    "maxReportWatts": 301
  },
  {
    "serialNumber": "121827034227",
    "lastReportDate": 1550543013,
    "devType": 1,
    "lastReportWatts": 265,
    "maxReportWatts": 303
  }
]

```