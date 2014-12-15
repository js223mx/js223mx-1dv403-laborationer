"use strict";
window.onload = function(){
    
    
    
    document.getElementById("clickit").addEventListener("click", function(){
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && xhr.status === 200){
                
                console.log(xhr.responseText);
                var question = JSON.parse(xhr.responseText);
                //console.log(qustion);
            }
             else{
                    console.log("Läsfel, status: " + xhr.status);
                }
            
        };
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
    })
    
    
}
