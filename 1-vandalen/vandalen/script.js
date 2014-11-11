"use strict";



var makePerson = function(persArr) { 
    
    // hittade map funktionen på https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    var names = persArr.map(function (pers){ return pers.name;}).sort(function(a, b) { return a.localeCompare(b) }).join(", ");//Bryter ut name ur data-arrayen och lägger i names, sen kommer den sorta efter ÅÄÖ uställter för ÄÅÖ, sen sätter du skapar du ett mellanrum efter var "j"
    var ages = persArr.map(function (ages){ return ages.age;});//bryter ut åldern ur data-arrayen och lägger i ages.
    
    ages.sort(function(a, b){return a-b});//sorterar ages i stegrande ordning
    var minAge = ages[0];
    var maxAge = ages[ages.length -1];
    var averageAge = ages.reduce(function(a, b){return a+b;}); // funktionen a, b plussar ihop alla värden i arrayen
    averageAge /= ages.length;

    var result = {minAge:minAge, maxAge:maxAge, averageAge:Math.round(averageAge), names:names};//skriver ut resultatet och avrundar averageAge
    return result; 
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);

console.log(result);

//{if(isNaN(b)){}