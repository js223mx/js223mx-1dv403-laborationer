"use strict";
/*global, RandomGenerator*/
var Memory ={
    
    memoArr: [],
    
    init:function(){
      
      //myArr;  
      var rows = 4;
      var cols = 4;
      Memory.memoArr = RandomGenerator.getPictureArray(rows, cols);
      Memory.createTable(rows, cols, Memory.imgRandom);
      
    },
    
    createTable: function(rows, cols, array){
      
       var myTable = document.createElement("table");
       var memoryBoard = document.getElementById("memoryBoard");
       memoryBoard.appendChild(myTable);
      
       memoryBoard.appendChild(myTable);
      
        for(var i = 0; i< rows; i++){
        
         var tr = document.createElement("tr");
         myTable.appendChild(tr);
        
          for(var j= 0; j < cols; j++){
          
           var td = document.createElement("td");
           tr.appendChild(td);
          
            var a = document.createElement("a");
            a.href = "#";
            td.appendChild(a);
          
          var img = document.createElement("img");
          img.setAttribute('src', 'pics/0.png');
          img.className = "img";
        
          a.appendChild(img);
        }
      }
      
    }
    
};
window.onload = Memory.init;