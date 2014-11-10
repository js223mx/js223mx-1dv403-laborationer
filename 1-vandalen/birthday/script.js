"use strict";

window.onload = function(){

	
	var birthday = function(date){
		


			// Din kod här.
			
			
	var today = new Date();		
	var birthdayDate = new Date(date);//(year, month-1, day, 12);
    
    birthdayDate.setFullYear(today.getFullYear());
    today.setDate(today.getDate()-1);
    
    if(birthdayDate < today){
    	birthdayDate.setFullYear(birthdayDate.getFullYear()+1);
    }
	
	var days = Math.floor((birthdayDate - today) / (1000*60*60*24));
    return(days);



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};