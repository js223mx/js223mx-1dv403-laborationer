{"changed":true,"filter":false,"title":"messageBoard.js","tooltip":"/2-labbymezzage/js/messageBoard.js","value":"\"use strict\";\n\n\nvar messageboard = {\n    \n    messages: [],\n    \n    init:function(e){\n        \n        var button = document.getElementById(\"click\");\n        button.onclick = messageboard.getMessages;\n    }\n    \n    getMessages:function(){\n        var textarea = document.getElementById(\"text\");\n        \n        messageboard.messages.push(new Message(textarea.value, new Date()));\n    }\n}\nwindow.onload = messageBoard.init;","undoManager":{"mark":94,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":28},"action":"remove","lines":["Mess"]},{"start":{"row":9,"column":24},"end":{"row":9,"column":31},"action":"insert","lines":["Message"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"remove","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":28},"action":"remove","lines":["mess"]},{"start":{"row":9,"column":24},"end":{"row":9,"column":36},"action":"insert","lines":["messageboard"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":43},"end":{"row":9,"column":44},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":45},"end":{"row":9,"column":46},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":46},"end":{"row":9,"column":47},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":47},"end":{"row":9,"column":48},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":55},"action":"remove","lines":["var textarea = document.getElementById(\"text\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":12,"column":7},"action":"remove","lines":["get"]},{"start":{"row":12,"column":4},"end":{"row":12,"column":15},"action":"insert","lines":["getMessages"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":18},"action":"remove","lines":["fu"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":24},"action":"insert","lines":["function"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":24},"end":{"row":12,"column":26},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":27},"end":{"row":14,"column":5},"action":"insert","lines":["","        ","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":8},"end":{"row":13,"column":55},"action":"insert","lines":["var textarea = document.getElementById(\"text\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":55},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":12},"action":"remove","lines":["mess"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":20},"action":"insert","lines":["messageboard"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":34},"action":"insert","lines":["getMessages()"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"remove","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":21},"end":{"row":15,"column":24},"action":"remove","lines":["mes"]},{"start":{"row":15,"column":21},"end":{"row":15,"column":29},"action":"insert","lines":["messages"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"remove","lines":["p"]},{"start":{"row":15,"column":30},"end":{"row":15,"column":36},"action":"insert","lines":["push()"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":35},"end":{"row":15,"column":70},"action":"insert","lines":["new Message(text.value, new Date())"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":13},"action":"remove","lines":["click"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["b"]},{"start":{"row":9,"column":8},"end":{"row":9,"column":14},"action":"insert","lines":["button"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":39},"end":{"row":15,"column":40},"action":"remove","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":39},"end":{"row":15,"column":40},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":46},"end":{"row":15,"column":47},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":46},"end":{"row":15,"column":47},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":51},"end":{"row":15,"column":52},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":47},"end":{"row":15,"column":52},"action":"remove","lines":["texta"]},{"start":{"row":15,"column":47},"end":{"row":15,"column":55},"action":"insert","lines":["textarea"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":75},"end":{"row":15,"column":76},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":39},"end":{"row":15,"column":40},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":39},"end":{"row":15,"column":40},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":39},"end":{"row":15,"column":46},"action":"remove","lines":["Message"]},{"start":{"row":15,"column":39},"end":{"row":15,"column":46},"action":"insert","lines":["Message"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""]},{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":34},"action":"insert","lines":["window.onload = messageBoard.init;"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":1,"column":34},"action":"remove","lines":["window.onload = messageBoard.init;"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":1},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":19,"column":34},"action":"insert","lines":["window.onload = messageBoard.init;"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":34},"end":{"row":19,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417042452263}