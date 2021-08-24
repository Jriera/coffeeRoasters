var capsule= document.getElementById("capsule");
var filter = document.getElementById("filter");
var espresso = document.getElementById("espresso");

var origin = document.getElementById("origin");
var decaf = document.getElementById("decaf");
var blended = document.getElementById("blended");

var grams250 = document.getElementById("250g");
var grams500 = document.getElementById("500g");
var grams1000 = document.getElementById("1000g");

var wholeBean = document.getElementById("wholebean");
var filterGrind = document.getElementById("filter>Grind");
var cafetiere = document.getElementById("cafetiere");

var weekly = document.getElementById("weekly");
var biweekly = document.getElementById("biweekly");
var monthly = document.getElementById("monthly");

/*#FEFCF7 light cream
#0E8784 dark green*/

/* var preferenceStyle = function (){
    if(capsule.style.backgroundColor==="#0E8784;" || filter.style.backgroundColor==="#0E8784 "){
        espresso.style.backgroundColor="#FEFCF7";
    }

    else if(espresso.style.backgroundColor==="#0E8784;" || filter.style.backgroundColor==="#0E8784 "){
        capsule.style.backgroundColor="#FEFCF7";
    }

    else if(espresso.style.backgroundColor==="#0E8784;" || capsule.style.backgroundColor==="#0E8784 "){
        filter.style.backgroundColor="#FEFCF7";
    }
} */

var capsuleSelected = function(){
    document.getElementById("capsule").style.backgroundColor="#0E8784";
    filter.style.backgroundColor="#FEFCF7";
    espresso.style.backgroundColor="#FEFCF7";

    document.getElementById("preference-selection").innerHTML="capsule";

}

var filterSelected = function(){
    filter.style.backgroundColor="#0E8784";
    capsule.style.backgroundColor="#FEFCF7";
    espresso.style.backgroundColor="#FEFCF7";

    document.getElementById("preference-selection").innerHTML="filter";

}

var espressoSelected = function(){
    espresso.style.backgroundColor="#0E8784";
    filter.style.backgroundColor="#FEFCF7";
    capsule.style.backgroundColor="#FEFCF7";

    document.getElementById("preference-selection").innerHTML="espresso";

}