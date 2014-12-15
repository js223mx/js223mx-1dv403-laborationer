{"changed":true,"filter":false,"title":"Memory.js","tooltip":"/3-gameon/memory/script/Memory.js","value":"\"use strict\";\n/*global RandomGenerator*/\nvar Memory = {\n    \n    memoArr: [],\n    choiseOfCard: [],\n    rows: 4,\n    cols: 4,\n    cardsFliped:0,\n    finnishedGame: 0,\n    numberOfTrys: 0,\n    \n    \n    init:function(){\n      \n      //myArr;  \n      //var rows = 4;\n      //var cols = 4;\n      Memory.memoArr = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);\n      \n      console.log(Memory.memoArr);\n      Memory.createTable(Memory.rows, Memory.cols);\n    },\n    \n    createTable: function(rows, cols){\n      \n      var memoBoard = document.getElementById(\"memoryBoard\");\n       var myTable = document.createElement(\"table\");\n       var cardNumber = 0;\n       \n      \n       memoBoard.appendChild(myTable);\n      \n        for(var i = 0; i < rows; i++){\n        \n         var tr = document.createElement(\"tr\");\n         myTable.appendChild(tr);\n        \n          for(var j = 0; j < cols; j++){\n          \n            var td = document.createElement(\"td\");\n            tr.appendChild(td);\n          \n            var a = document.createElement(\"a\");\n            a.href = \"#\";\n            td.appendChild(a);\n          \n            var img = document.createElement(\"img\");\n            img.src = \"pics/0.png\";\n            \n            a.appendChild(img);\n            \n            Memory.turnBrick(cardNumber, a);\n            \n            cardNumber += 1;\n        }\n      }\n      \n    },\n    \n    turnBrick:function(brickNumber,picture){\n     \n     \n     picture.onclick = function(){\n      \n       var img = picture.getElementsByTagName(\"img\")[0];\n       \n       if(img.getAttribute(\"src\") !== \"pics/0.png\"){\n        \n        return;\n       }\n       \n       Memory.cardsFliped += 1;\n       \n       if(Memory.cardsFliped == 2 || Memory.cardsFliped == 1){\n        \n        img.src = \"pics/\" + Memory.memoArr[brickNumber] + \".png\";\n        Memory.choiseOfCard.push(img);\n       }\n       \n       else{\n        \n        return;\n       }\n       if(Memory.cardsFliped == 2){\n        \n        Memory.numberOfTrys += 1;\n        \n        setTimeout(function(){\n         console.log(Memory.choiseOfCard[0].getAttribute(\"src\") === Memory.choiseOfCard[1].getAttribute(\"src\"));\n         if(Memory.choiseOfCard[0].getAttribute(\"src\") === Memory.choiseOfCard[1].getAttribute(\"src\")){\n          \n          Memory.finnishedGame += 1;\n          \n          if(Memory.finnishedGame === Memory.rows * Memory.cols / 2){\n           \n           //skriver ut ett meddelande vid vinst\n           var p = document.createElement(\"p\");\n           p.textContent = \"Grattis! Du hittade alla par på \" + Memory.numberOfTrys + \" försök.\";\n           var memoBoard = document.getElementById(\"memoryBoard\");\n           memoBoard.appendChild(p);\n          }\n         }\n         else{\n          Memory.choiseOfCard[0].setAttribute(\"src\",\"pics/0.png\");\n          Memory.choiseOfCard[1].setAttribute(\"src\",\"pics/0.png\");\n          \n         }\n         \n         Memory.choiseOfCard = [];\n         Memory.cardsFliped = 0;\n        }, 1000);\n       }\n     };\n     \n     \n    }\n    \n};\nwindow.onload = Memory.init;","undoManager":{"mark":97,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":7},"action":"remove","lines":["win"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":6},"action":"remove","lines":["fi"]},{"start":{"row":9,"column":4},"end":{"row":9,"column":17},"action":"insert","lines":["finnishedGame"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":17},"end":{"row":84,"column":28},"action":"remove","lines":["turnedCards"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":17},"end":{"row":84,"column":18},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":18},"end":{"row":84,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":19},"end":{"row":84,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":20},"end":{"row":84,"column":21},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":21},"end":{"row":84,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":22},"end":{"row":84,"column":23},"action":"insert","lines":["F"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":23},"end":{"row":84,"column":24},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":24},"end":{"row":84,"column":25},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":25},"end":{"row":84,"column":26},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":26},"end":{"row":84,"column":27},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":27},"end":{"row":84,"column":28},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":28},"end":{"row":84,"column":29},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":23},"end":{"row":84,"column":24},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":23},"end":{"row":84,"column":24},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":84,"column":26},"end":{"row":84,"column":27},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":17},"end":{"row":74,"column":28},"action":"remove","lines":["turnedCards"]},{"start":{"row":74,"column":17},"end":{"row":74,"column":18},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":18},"end":{"row":74,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":19},"end":{"row":74,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":17},"end":{"row":74,"column":20},"action":"remove","lines":["car"]},{"start":{"row":74,"column":17},"end":{"row":74,"column":28},"action":"insert","lines":["cardsFliped"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":44},"end":{"row":74,"column":55},"action":"remove","lines":["turnedCards"]},{"start":{"row":74,"column":44},"end":{"row":74,"column":45},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":45},"end":{"row":74,"column":46},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":46},"end":{"row":74,"column":47},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":47},"end":{"row":74,"column":48},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":44},"end":{"row":74,"column":48},"action":"remove","lines":["card"]},{"start":{"row":74,"column":44},"end":{"row":74,"column":55},"action":"insert","lines":["cardsFliped"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":16},"end":{"row":109,"column":27},"action":"remove","lines":["turnedCards"]},{"start":{"row":109,"column":16},"end":{"row":109,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":17},"end":{"row":109,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":18},"end":{"row":109,"column":19},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":109,"column":16},"end":{"row":109,"column":19},"action":"remove","lines":["car"]},{"start":{"row":109,"column":16},"end":{"row":109,"column":27},"action":"insert","lines":["cardsFliped"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":14},"end":{"row":72,"column":25},"action":"remove","lines":["turnedCards"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":14},"end":{"row":72,"column":15},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":15},"end":{"row":72,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":14},"end":{"row":72,"column":19},"action":"remove","lines":["cards"]},{"start":{"row":72,"column":14},"end":{"row":72,"column":25},"action":"insert","lines":["cardsFliped"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":38},"end":{"row":60,"column":39},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":39},"end":{"row":60,"column":40},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":40},"end":{"row":60,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":41},"end":{"row":60,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":20},"end":{"row":65,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":21},"end":{"row":65,"column":22},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":22},"end":{"row":65,"column":23},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":23},"end":{"row":65,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":8},"end":{"row":63,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":9},"end":{"row":63,"column":10},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":10},"end":{"row":63,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":11},"end":{"row":63,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":15},"action":"remove","lines":["turnedCards"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"remove","lines":["car"]},{"start":{"row":8,"column":4},"end":{"row":8,"column":15},"action":"insert","lines":["cardsFliped"]}]}],[{"group":"doc","deltas":[{"start":{"row":97,"column":94},"end":{"row":97,"column":95},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":11},"end":{"row":96,"column":0},"action":"insert","lines":["",""]},{"start":{"row":96,"column":0},"end":{"row":96,"column":11},"action":"insert","lines":["           "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":11},"end":{"row":96,"column":12},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":12},"end":{"row":96,"column":13},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":13},"end":{"row":96,"column":14},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":14},"end":{"row":96,"column":15},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":15},"end":{"row":96,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":16},"end":{"row":96,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":17},"end":{"row":96,"column":18},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":18},"end":{"row":96,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":19},"end":{"row":96,"column":20},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":20},"end":{"row":96,"column":21},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":21},"end":{"row":96,"column":22},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":22},"end":{"row":96,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":23},"end":{"row":96,"column":24},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":24},"end":{"row":96,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":25},"end":{"row":96,"column":26},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":26},"end":{"row":96,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":27},"end":{"row":96,"column":28},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":28},"end":{"row":96,"column":29},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":29},"end":{"row":96,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":30},"end":{"row":96,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":31},"end":{"row":96,"column":32},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":32},"end":{"row":96,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":33},"end":{"row":96,"column":34},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":34},"end":{"row":96,"column":35},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":35},"end":{"row":96,"column":36},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":36},"end":{"row":96,"column":37},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":37},"end":{"row":96,"column":38},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":38},"end":{"row":96,"column":39},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":39},"end":{"row":96,"column":40},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":40},"end":{"row":96,"column":41},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":42},"end":{"row":96,"column":43},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":43},"end":{"row":96,"column":44},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":44},"end":{"row":96,"column":45},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":45},"end":{"row":96,"column":46},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":46},"end":{"row":96,"column":47},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":96,"column":47},"end":{"row":96,"column":48},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"remove","lines":["2"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["4"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["2"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["4"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":[" "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"insert","lines":[" "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":[" "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":[" "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":[" "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":[" "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":1},"action":"insert","lines":[" "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":1},"action":"insert","lines":[" "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"insert","lines":[" "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":[" "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":[" "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":[" "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":[" "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":1},"action":"insert","lines":[" "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":[" "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":1},"action":"insert","lines":[" "]}]}]]},"ace":{"folds":[],"scrolltop":1080,"scrollleft":0,"selection":{"start":{"row":103,"column":14},"end":{"row":106,"column":10},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418654951028}