"use strict";
/*global RandomGenerator*/
var Memory = {
    
    memoArr: [],
    choiseOfCard: [],
    rows: 2,
    cols: 2,
    cardsFliped:0,
    finnishedGame: 0,
    numberOfTrys: 0,
    
    
    init:function(){
      
      //myArr;  
      //var rows = 4;
      //var cols = 4;
      Memory.memoArr = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
      
      console.log(Memory.memoArr);
      Memory.createTable(Memory.rows, Memory.cols);
    },
    
    createTable: function(rows, cols){
      
      var memoBoard = document.getElementById("memoryBoard");
       var myTable = document.createElement("table");
       var cardNumber = 0;
       
      
       memoBoard.appendChild(myTable);
      
        for(var i = 0; i < rows; i++){
        
         var tr = document.createElement("tr");
         myTable.appendChild(tr);
        
          for(var j = 0; j < cols; j++){
          
           var td = document.createElement("td");
           tr.appendChild(td);
          
            var a = document.createElement("a");
            a.href = "#";
            td.appendChild(a);
          
          var img = document.createElement("img");
          img.src = "pics/0.png";
          
          a.appendChild(img);
          
          Memory.turnBrick(cardNumber, a);
          
          cardNumber += 1;
        }
      }
      
    },
    
    turnBrick:function(brickNumber,picture){
     
     
     picture.onclick = function(){
      
       var img = picture.getElementsByTagName("img")[0];
       
       if(img.getAttribute("src") !== "pics/0.png"){
        
        return;
       }
       
       Memory.cardsFliped += 1;
       
       if(Memory.cardsFliped == 2 || Memory.cardsFliped == 1){
        
        img.src = "pics/" + Memory.memoArr[brickNumber] + ".png";
        Memory.choiseOfCard.push(img);
       }
       
       else{
        
        return;
       }
       if(Memory.cardsFliped == 2){
        
        Memory.numberOfTrys += 1;
        
        setTimeout(function(){
         console.log(Memory.choiseOfCard[0].getAttribute("src") === Memory.choiseOfCard[1].getAttribute("src"));
         if(Memory.choiseOfCard[0].getAttribute("src") === Memory.choiseOfCard[1].getAttribute("src")){
          
          Memory.finnishedGame += 1;
          
          if(Memory.finnishedGame === Memory.rows * Memory.cols / 2){
           
           //skriver ut ett meddelande vid vinst
           var p = document.createElement("p");
           p.textContent = "Grattis! Du hittade alla par på " + Memory.numberOfTrys + " försök.";
           var memoBoard = document.getElementById("memoryBoard");
           memoBoard.appendChild(p);
          }
         }
         else{
          Memory.choiseOfCard[0].setAttribute("src","pics/0.png");
          Memory.choiseOfCard[1].setAttribute("src","pics/0.png");
          
         }
         
         Memory.choiseOfCard = [];
         Memory.cardsFliped = 0;
        }, 1000);
       }
     };
     
     
    }
    
};
window.onload = Memory.init;