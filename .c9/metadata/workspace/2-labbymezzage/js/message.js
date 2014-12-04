{"changed":true,"filter":false,"title":"message.js","tooltip":"/2-labbymezzage/js/message.js","value":"\"use strict\";\nfunction Message(message, date) {\n    \n    this.getText = function(){\n        return message;\n    };\n    this.setText = function(_text){\n        message = _text;\n    };\n    this.getDate = function(){\n        return date;\n    };\n    this.setDate = function(_date){\n        date = _date;\n    };\n}\n\nMessage.prototype.toString = function() {\n    return this.getText() + \" (\" + this.getDate() + \") \";\n};\nMessage.prototype.getHTMLText = function(){\n    return this.getText().replace(/\\n/g, \"<br>\");\n    \n};\nMessage.prototype.getDateText = function(){\n    var myDate = new Date();\n    \n    var h = myDate.getHours();\n \tvar min = myDate.getMinutes();\n \tvar sec = myDate.getSeconds();\n \treturn h +\":\"+ min +\":\"+ sec;\n    \n};\n","undoManager":{"mark":16,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":45},"end":{"row":18,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":47},"end":{"row":18,"column":48},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":53},"end":{"row":18,"column":54},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":43},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":25},"end":{"row":25,"column":27},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":28},"end":{"row":26,"column":0},"action":"insert","lines":["",""]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":4},"end":{"row":27,"column":0},"action":"insert","lines":["",""]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":4},"end":{"row":31,"column":43},"action":"insert","lines":["var hours = currentDate.getHours();"," \tvar minutes = currentDate.getMinutes();"," \tvar seconds = currentDate.getSeconds();",""," \treturn hours +\":\"+ minutes +\":\"+ seconds;"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":16},"end":{"row":27,"column":27},"action":"remove","lines":["currentDate"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":16},"end":{"row":27,"column":18},"action":"remove","lines":["my"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":22},"action":"insert","lines":["myDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":16},"end":{"row":28,"column":27},"action":"remove","lines":["currentDate"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":16},"end":{"row":28,"column":18},"action":"remove","lines":["my"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":22},"action":"insert","lines":["myDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"remove","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":16},"end":{"row":29,"column":18},"action":"remove","lines":["my"]},{"start":{"row":29,"column":16},"end":{"row":29,"column":22},"action":"insert","lines":["myDate"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":33},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["D"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":4},"end":{"row":22,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416927726000}