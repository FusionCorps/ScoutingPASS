var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025txfor",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Algae in Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Algae in Net Score",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Algae In Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Algae In Net Score",
      "code": "tns",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "pc": "Parked<br>",
        "fc": "Failed Climb<br>",
        "sc": "Shallow Cage<br>",
        "dc": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "123 Robot Evaluation",
      "code": "mi",
      "type": "radio",
      "choices": {
        "3": "3 Very Effective<br>",
        "2": "2 Average<br>",
        "1": "1 Poor Performance<br>"
      },
      "defaultValue": "x"
    },
    { "name": "Tippy",
      "code": "tippy",
      "type": "checkbox",
      "tooltip": "Could/Did Fall Over"
    },
    { "name": "Dropper",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Dropped Pieces Often"
    },
    { "name": "Penalized",
      "code": "Penalized",
      "type": "checkbox",
      "tooltip": "received penaltys for any reason, expound in comments"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 25,
      "maxSize": 200
    }
  ]
}`;