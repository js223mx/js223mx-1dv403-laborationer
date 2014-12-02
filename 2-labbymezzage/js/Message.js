"use strict";
function Message(message, date) {
    
    this.getText = function(){
        return message;
    };
    this.setText = function(_text){
        message = _text;
    };
    this.getDate = function(){
        return date;
    };
    this.setDate = function(_date){
        date = _date;
    };
}

Message.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + ") ";
};
Message.prototype.getHTMLText = function(){
    return this.getText().replace(/\n/g, "<br>");
    
};
Message.prototype.getDateText = function(){
    var myDate = new Date();
    
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDay();
    var h = myDate.getHours();
 	var min = myDate.getMinutes();
 	var sec = myDate.getSeconds();
 	return this.getDate(year +"/"+ month +"/"+ day +","+ h +":"+ min +":"+ sec); 
    
};
