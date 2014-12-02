"use strict";
/*global Message*/

var MessageBoard = {
    
    messages: [],
    
    init:function(){//hämtar html-document
        
        var button = document.getElementById("click"); 
        var textarea = document.getElementById("text");
        
        
        //event som kollar ifall enter trycks in med eller utan shift
        textarea.addEventListener("keypress", function(e){
            if(!e) {
                e = event;
            }
                if(e.keyCode == 13 && !e.shiftKey){
                    
				e.preventDefault();
				newMessage();
			}
                });
                
                button.onclick = newMessage;
                
                //skapar meddelanden
                function newMessage(){
                    
                MessageBoard.messages.push(new Message (textarea.value, new Date()));
                MessageBoard.renderMessages();
                textarea.value ="";
            }
    },
    
    renderMessages: function(){
        
    var count = document.getElementById("count");
    count.innerHTML ="Antal meddelande: " + MessageBoard.messages.length;
        
       document.getElementById("myMessages").innerHTML = "";
       
       
       for (var i = 0; i < MessageBoard.messages.length; i += 1){
                MessageBoard.renderMessage(i);
            }
    },
   
   renderMessage: function(messageID){
       
       //hämtar ett meddelande och lägger det i en p-tag
       var myText = document.createElement("p"),
        myMessages = document.getElementById("myMessages"),
      
      
       div = document.createElement("div");
       div.classname = "myMessage";
       myText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
       myMessages.appendChild(div);
       div.appendChild(myText);
        
      var messTime = document.createElement("footer");
      messTime.innerHTML = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
      div.appendChild(messTime);
      
      //Lägger till en bild för borttagning av meddelanden
      var deleteMessage = document.createElement("a");
      deleteMessage.className = "deleteMessage";
      deleteMessage.href = "#";
      div.appendChild(deleteMessage);
      
      deleteMessage.onclick = function(){

          if(confirm("Vill du verkligen redera det här meddelandet?")){
              MessageBoard.deleteMessage(messageID);
          }
      };
      
      var messageTime = document.createElement("a");
      messageTime.className = "messageTime";
      messageTime.href = "#";
      div.appendChild(messageTime);
      
      messageTime.onclick = function(){
          
          alert(MessageBoard.messages[messageID].getDateText());
      };
   
   },
   deleteMessage:function(messageID){
       
       MessageBoard.messages.splice(messageID, 1);
       MessageBoard.renderMessages();
   }
};
//window.onload = MessageBoard.init;