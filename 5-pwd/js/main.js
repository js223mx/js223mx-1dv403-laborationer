"use strict";

 var desktop = {
     
     init: function (){
         var menuIcon = document.getElementById("click");
       
         //Gör menuiconen till en knapp
         menuIcon.onclick = function(){
             var myMain = document.getElementById("deskdiv");
             
             //Kollar ifall det redan finns ett fönster och förhindrar att fler öppnas.
             if (myMain.firstElementchild){
                 return false;
             }
             
             var imageFolder = document.createElement("div");
             imageFolder.id="imgFolder";
             
             
             var topDiv = document.createElement("div");
             topDiv.id ="topDiv";
             
             var topImage = document.createElement("img");
             topImage.className = "topImage";
             topImage.setAttribute("src", "css/topPic.png");
             
             var folderText = document.createElement("span");
             folderText.id = "folderText";
             folderText.appendChild(document.createTextNode("Change background"));
             
             var closeWindow = document.createElement("a");
             closeWindow.className = "closeWindow";
             closeWindow.setAttribute("href", "#");
             
             //Knappen som gör att dun kan stänga fönstret.
             closeWindow.onclick = function () {
             myMain.removeChild(imageFolder);
             }
             
             var closeImage = document.createElement("img");
             closeImage.setAttribute("src","css/close.png");
             
             var picContainer = document.createElement("div");
             picContainer.id = "picContainer";
             
             var botDiv = document.createElement("div");
             botDiv.id = "botDiv";
             
             var botText = document.createElement("span");
             botText.id = "botText";
             botText.appendChild(document.createTextNode("Now loading"));
             
             var loading = document.createElement("img");
             loading.setAttribute("src", "css/loading.GIF");
             
             myMain.appendChild(imageFolder);
             imageFolder.appendChild(topDiv);
             topDiv.appendChild(topImage);
             topDiv.appendChild(folderText);
             topDiv.appendChild(closeWindow);
             closeWindow.appendChild(closeImage);
             imageFolder.appendChild(picContainer);
             imageFolder.appendChild(botDiv);
             botDiv.appendChild(botText);
             botDiv.appendChild(loading);
             
             var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
             
              new AjaxCon(url,function (data){
               
               //Tar bort loading iconen när anropet är klart.
               botDiv.removeChild(loading);
               botDiv.removeChild(botText);
               
               var thumbImages = JSON.parse (data);
               
               //kollar vilket tummnagelbild som är störst.
               var imgSize = desktop.imageSize(thumbImages);
               
               //Kör igenom alla objekt i JSON och skapar en plats för varje bild i rutan
               for( var i = 0; i < thumbImages.length; i+=1) {
                
                   var thumbImageContainer = document.createElement("figure");
                   
                   var imageClick = document.createElement("a");
                   imageClick.setAttribute("href", "#");
                   
                   //Ser till så att bakgrund byts när a-taggen klickas på.
                   desktop.changeBackground(thumbImages[i].URL,imageClick);
                   
                   var image = document.createElement("img");
               
                   image.setAttribute("src", thumbImages[i].thumbURL);
                   
                   thumbImageContainer.style.height = imgSize.height + "px";
                   thumbImageContainer.style.width = imgSize.width + "px";
                   
                   picContainer.appendChild(thumbImageContainer);
                   thumbImageContainer.appendChild(imageClick);
                   imageClick.appendChild(image);
              
             }
         });
     };
 },
 
 changeBackground: function (image, ID) {
  
   ID.onclick = function (){
    document.getElementById("Mymain").style.background = "url('" + image + "') repeat";
   };
 },
 
  imageSize: function(thumbImages) {
   
   var height = 0;
   var width = 0;
   
   for (var x in thumbImages) {
    
    if (thumbImages[x].thumbHeight > height){
     
      height = thumbImages[x].thumbHeight;
    }
    
    if (thumbImages[x].thumbWidth > width){
    
     width = thumbImages[x].thumbWidth;
     }
   
  }
   return {
           height: height,
          width: width,
   };
  
 }
};

 
 
 window.onload = desktop.init;