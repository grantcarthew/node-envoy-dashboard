# Enphase Envoy API Endpoint - /api/v1/inventory.json

* `http://[address]/inventory.json`
* `http://[address]/inventory.json?deleted=1`

## Example Payload without `deleted=1`

```json

[
  {
    "type":"PCU",
    "devices":[
      {
        "part_num":"800-01103-r02",
        "installed":"1547780434",
        "serial_num":"121827034026",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542697",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780434",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390225,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780443",
        "serial_num":"121827028415",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542698",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780443",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390481,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780447",
        "serial_num":"121827033959",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542700",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780447",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390737,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780450",
        "serial_num":"121827030433",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542701",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780450",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390993,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780454",
        "serial_num":"121827034339",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542703",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780454",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391249,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780462",
        "serial_num":"121827034023",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542705",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780462",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391505,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780466",
        "serial_num":"121827034126",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542705",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780466",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391761,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780469",
        "serial_num":"121827034029",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542707",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780469",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392017,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780474",
        "serial_num":"121827033952",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542709",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780474",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392273,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780484",
        "serial_num":"121827034095",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542710",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780484",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392529,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780488",
        "serial_num":"121827034113",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542711",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780488",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392785,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780492",
        "serial_num":"121827034227",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542713",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780492",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393041,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780495",
        "serial_num":"121827033955",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542714",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780495",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393297,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780505",
        "serial_num":"121827034131",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542716",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780505",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393553,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780509",
        "serial_num":"121827034025",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542718",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780509",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393809,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780512",
        "serial_num":"121827034181",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542718",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780512",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394065,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780516",
        "serial_num":"121827028418",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542720",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780516",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394321,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780525",
        "serial_num":"121827034024",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542722",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780525",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394577,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780534",
        "serial_num":"121827033979",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542723",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780534",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394833,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780538",
        "serial_num":"121827028419",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542724",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780538",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627395089,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      }
    ]
  },
  {
    "type":"ACB",
    "devices":[

    ]
  },
  {
    "type":"NSRB",
    "devices":[
      {
        "part_num":"800-00598-r04",
        "installed":"1547780438",
        "serial_num":"121818010538",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542726",
        "admin_state":1,
        "dev_type":12,
        "created_date":"1547780438",
        "img_load_date":"1522376696",
        "img_pnum_running":"520-00086-r01-v02.12.07",
        "ptpn":"540-00139-r01-v02.12.00",
        "chaneid":1811939601,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":false,
        "communicating":true,
        "provisioned":true,
        "operating":true,
        "relay":"closed",
        "reason_code":-1,
        "reason":"ok",
        "line-count":1,
        "line1-connected":true,
        "line2-connected":false,
        "line3-connected":false
      },
      {
        "part_num":"800-00598-r04",
        "installed":"1547780530",
        "serial_num":"121818010317",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542728",
        "admin_state":1,
        "dev_type":12,
        "created_date":"1547780530",
        "img_load_date":"1522376696",
        "img_pnum_running":"520-00086-r01-v02.12.07",
        "ptpn":"540-00139-r01-v02.12.00",
        "chaneid":1811939857,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":false,
        "communicating":true,
        "provisioned":true,
        "operating":true,
        "relay":"closed",
        "reason_code":-1,
        "reason":"ok",
        "line-count":1,
        "line1-connected":true,
        "line2-connected":false,
        "line3-connected":false
      }
    ]
  }
]

```

## Example Payload with `deleted=1`

```json

[
  {
    "type":"PCU",
    "devices":[
      {
        "part_num":"800-01103-r02",
        "installed":"1547780434",
        "serial_num":"121827034026",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550542999",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780434",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390225,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780443",
        "serial_num":"121827028415",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543000",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780443",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390481,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780447",
        "serial_num":"121827033959",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543002",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780447",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390737,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780450",
        "serial_num":"121827030433",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543004",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780450",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627390993,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780454",
        "serial_num":"121827034339",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543004",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780454",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391249,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780462",
        "serial_num":"121827034023",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543006",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780462",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391505,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780466",
        "serial_num":"121827034126",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543008",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780466",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627391761,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780469",
        "serial_num":"121827034029",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543009",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780469",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392017,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780474",
        "serial_num":"121827033952",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543010",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780474",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392273,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780484",
        "serial_num":"121827034095",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543012",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780484",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392529,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780488",
        "serial_num":"121827034113",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543013",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780488",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627392785,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780492",
        "serial_num":"121827034227",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543014",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780492",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393041,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780495",
        "serial_num":"121827033955",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543016",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780495",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393297,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780505",
        "serial_num":"121827034131",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543017",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780505",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393553,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780509",
        "serial_num":"121827034025",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543019",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780509",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627393809,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780512",
        "serial_num":"121827034181",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543021",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780512",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394065,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780516",
        "serial_num":"121827028418",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543021",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780516",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394321,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780525",
        "serial_num":"121827034024",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543023",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780525",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394577,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780534",
        "serial_num":"121827033979",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543025",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780534",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627394833,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      },
      {
        "part_num":"800-01103-r02",
        "installed":"1547780538",
        "serial_num":"121827028419",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543026",
        "admin_state":1,
        "dev_type":1,
        "created_date":"1547780538",
        "img_load_date":"1547787145",
        "img_pnum_running":"520-00082-r01-v02.14.02",
        "ptpn":"540-00146-r01-v02.14.03",
        "chaneid":1627395089,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":true,
        "communicating":true,
        "provisioned":true,
        "operating":true
      }
    ]
  },
  {
    "type":"ACB",
    "devices":[

    ]
  },
  {
    "type":"NSRB",
    "devices":[
      {
        "part_num":"800-00598-r04",
        "installed":"1547780438",
        "serial_num":"121818010538",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543026",
        "admin_state":1,
        "dev_type":12,
        "created_date":"1547780438",
        "img_load_date":"1522376696",
        "img_pnum_running":"520-00086-r01-v02.12.07",
        "ptpn":"540-00139-r01-v02.12.00",
        "chaneid":1811939601,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":false,
        "communicating":true,
        "provisioned":true,
        "operating":true,
        "relay":"closed",
        "reason_code":-1,
        "reason":"ok",
        "line-count":1,
        "line1-connected":true,
        "line2-connected":false,
        "line3-connected":false
      },
      {
        "part_num":"800-00598-r04",
        "installed":"1547780530",
        "serial_num":"121818010317",
        "device_status":[
          "envoy.global.ok"
        ],
        "last_rpt_date":"1550543028",
        "admin_state":1,
        "dev_type":12,
        "created_date":"1547780530",
        "img_load_date":"1522376696",
        "img_pnum_running":"520-00086-r01-v02.12.07",
        "ptpn":"540-00139-r01-v02.12.00",
        "chaneid":1811939857,
        "device_control":[
          {
            "gficlearset":false
          }
        ],
        "producing":false,
        "communicating":true,
        "provisioned":true,
        "operating":true,
        "relay":"closed",
        "reason_code":-1,
        "reason":"ok",
        "line-count":1,
        "line1-connected":true,
        "line2-connected":false,
        "line3-connected":false
      }
    ]
  }
]

```