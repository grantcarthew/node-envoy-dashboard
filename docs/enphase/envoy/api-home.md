# Enphase Envoy API Endpoint - home.json

* `http://[address]/home.json`

## Example Payload

```json

{
   "software_build_epoch":1542074240,
   "is_nonvoy":false,
   "db_size":"4 MB",
   "db_percent_full":"1",
   "timezone":"Australia/Brisbane",
   "current_date":"01/22/2019",
   "current_time":"13:56",
   "network":{
      "web_comm":true,
      "ever_reported_to_enlighten":true,
      "last_enlighten_report_time":1548129171,
      "primary_interface":"wlan0",
      "interfaces":[
         {
            "type":"ethernet",
            "interface":"eth0",
            "mac":"00:1D:C0:6B:5E:76",
            "dhcp":true,
            "ip":"169.254.120.1",
            "signal_strength":0,
            "signal_strength_max":1,
            "carrier":false
         },
         {
            "signal_strength":2,
            "signal_strength_max":5,
            "type":"wifi",
            "interface":"wlan0",
            "mac":"50:F1:4A:E0:4A:E4",
            "dhcp":true,
            "ip":"[redacted]",
            "carrier":true,
            "supported":true,
            "present":true,
            "configured":true,
            "status":"connected"
         }
      ]
   },
   "tariff":"none",
   "comm":{
      "num":22,
      "level":5,
      "pcu":{
         "num":20,
         "level":5
      },
      "acb":{
         "num":0,
         "level":0
      },
      "nsrb":{
         "num":2,
         "level":5
      }
   },
   "alerts":[
      {
         "msg_key":"lwui.home.warnings.cross_domain_traffic"
      }
   ],
   "update_status":"satisfied"
}

```