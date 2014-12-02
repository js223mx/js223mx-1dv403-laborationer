window.onload = function(){
"use strict";
/*global Message, MessageBoard*/
var mess = new Message("Testmeddelande", new Date());
console.log(mess);
//alert(mess.getText());
//mess.setText("Nått annat");
//alert(mess);
MessageBoard.init();
};