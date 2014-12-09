"use strict";
window.onload = function(){
    
    document.getElementById("clickit").addEventListener("click", function(){
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && xhr.status === 200){
                
                //var qustion = JASON.parse(xhr.responseText);
                //console.log(qustion);
            }
            
        };
        xhr.open("GET", "", true);
        xhr.send(null);
    })
    
}
