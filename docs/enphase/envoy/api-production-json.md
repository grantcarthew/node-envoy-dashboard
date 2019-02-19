# Enphase Envoy API Endpoint - /api/v1/production.json

* `http://[address]/production.json`
* `http://[address]/production.json?details=1`

## Example Payload without `details=1`

```json

{
  "production":[
    {
      "type":"inverters",
      "activeCount":20,
      "readingTime":1550542427,
      "wNow":5081,
      "whLifetime":1039227
    },
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"production",
      "readingTime":1550542581,
      "wNow":5170.983,
      "whLifetime":1037178.411,
      "varhLeadLifetime":0.0,
      "varhLagLifetime":301898.153,
      "vahLifetime":1200191.823,
      "rmsCurrent":20.416,
      "rmsVoltage":254.683,
      "reactPwr":371.298,
      "apprntPwr":5201.68,
      "pwrFactor":0.99,
      "whToday":21872.411,
      "whLastSevenDays":226107.411,
      "vahToday":24148.823,
      "varhLeadToday":0.0,
      "varhLagToday":4146.153
    }
  ],
  "consumption":[
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"total-consumption",
      "readingTime":1550542581,
      "wNow":673.013,
      "whLifetime":1063951.212,
      "varhLeadLifetime":617229.541,
      "varhLagLifetime":302094.969,
      "vahLifetime":1459449.76,
      "rmsCurrent":2.233,
      "rmsVoltage":254.705,
      "reactPwr":-1254.259,
      "apprntPwr":568.678,
      "pwrFactor":1.0,
      "whToday":11268.212,
      "whLastSevenDays":234817.212,
      "vahToday":23288.76,
      "varhLeadToday":9169.541,
      "varhLagToday":4147.969
    },
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"net-consumption",
      "readingTime":1550542581,
      "wNow":-4497.97,
      "whLifetime":594019.431,
      "varhLeadLifetime":617229.541,
      "varhLagLifetime":196.816,
      "vahLifetime":1459449.76,
      "rmsCurrent":18.184,
      "rmsVoltage":254.726,
      "reactPwr":-882.961,
      "apprntPwr":4633.18,
      "pwrFactor":-0.97,
      "whToday":0,
      "whLastSevenDays":0,
      "vahToday":0,
      "varhLeadToday":0,
      "varhLagToday":0
    }
  ],
  "storage":[
    {
      "type":"acb",
      "activeCount":0,
      "readingTime":0,
      "wNow":0,
      "whNow":0,
      "state":"idle"
    }
  ]
}

```

## Example Payload with `details=1`

```json

{
  "production":[
    {
      "type":"inverters",
      "activeCount":20,
      "readingTime":1550542427,
      "wNow":5081,
      "whLifetime":1039227
    },
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"production",
      "readingTime":1550542465,
      "wNow":5162.634,
      "whLifetime":1037010.586,
      "varhLeadLifetime":0.0,
      "varhLagLifetime":301886.188,
      "vahLifetime":1200023.096,
      "rmsCurrent":20.429,
      "rmsVoltage":254.014,
      "reactPwr":366.811,
      "apprntPwr":5190.862,
      "pwrFactor":0.99,
      "whToday":21704.586,
      "whLastSevenDays":225939.586,
      "vahToday":23980.096,
      "varhLeadToday":0.0,
      "varhLagToday":4134.188,
      "lines":[
        {
          "wNow":5162.634,
          "whLifetime":1037010.586,
          "varhLeadLifetime":0.0,
          "varhLagLifetime":301886.188,
          "vahLifetime":1200023.096,
          "rmsCurrent":20.429,
          "rmsVoltage":254.014,
          "reactPwr":366.811,
          "apprntPwr":5190.862,
          "pwrFactor":0.99,
          "whToday":21704.586,
          "whLastSevenDays":225939.586,
          "vahToday":23980.096,
          "varhLeadToday":0.0,
          "varhLagToday":4134.188
        }
      ]
    }
  ],
  "consumption":[
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"total-consumption",
      "readingTime":1550542465,
      "wNow":1286.771,
      "whLifetime":1063920.161,
      "varhLeadLifetime":617200.044,
      "varhLagLifetime":302083.003,
      "vahLifetime":1459308.319,
      "rmsCurrent":4.521,
      "rmsVoltage":254.068,
      "reactPwr":-1386.045,
      "apprntPwr":1148.591,
      "pwrFactor":1.0,
      "whToday":11237.161,
      "whLastSevenDays":234786.161,
      "vahToday":23147.319,
      "varhLeadToday":9140.044,
      "varhLagToday":4136.003,
      "lines":[
        {
          "wNow":1286.771,
          "whLifetime":1063920.161,
          "varhLeadLifetime":617200.044,
          "varhLagLifetime":302083.003,
          "vahLifetime":1459308.319,
          "rmsCurrent":4.521,
          "rmsVoltage":254.068,
          "reactPwr":-1386.045,
          "apprntPwr":1148.591,
          "pwrFactor":1.0,
          "whToday":11237.161,
          "whLastSevenDays":234786.161,
          "vahToday":23147.319,
          "varhLeadToday":9140.044,
          "varhLagToday":4136.003
        }
      ]
    },
    {
      "type":"eim",
      "activeCount":1,
      "measurementType":"net-consumption",
      "readingTime":1550542465,
      "wNow":-3875.863,
      "whLifetime":594019.431,
      "varhLeadLifetime":617200.044,
      "varhLagLifetime":196.816,
      "vahLifetime":1459308.319,
      "rmsCurrent":15.908,
      "rmsVoltage":254.121,
      "reactPwr":-1019.234,
      "apprntPwr":4045.702,
      "pwrFactor":-0.96,
      "whToday":0,
      "whLastSevenDays":0,
      "vahToday":0,
      "varhLeadToday":0,
      "varhLagToday":0,
      "lines":[
        {
          "wNow":-3875.863,
          "whLifetime":594019.431,
          "varhLeadLifetime":617200.044,
          "varhLagLifetime":196.816,
          "vahLifetime":1459308.319,
          "rmsCurrent":15.908,
          "rmsVoltage":254.121,
          "reactPwr":-1019.234,
          "apprntPwr":4045.702,
          "pwrFactor":-0.96,
          "whToday":0,
          "whLastSevenDays":0,
          "vahToday":0,
          "varhLeadToday":0,
          "varhLagToday":0
        }
      ]
    }
  ],
  "storage":[
    {
      "type":"acb",
      "activeCount":0,
      "readingTime":0,
      "wNow":0,
      "whNow":0,
      "state":"idle"
    }
  ]
}

```