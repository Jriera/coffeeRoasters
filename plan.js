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
var filterGrind = document.getElementById("filterGrind");
var cafetiere = document.getElementById("cafetiere");

var weekly = document.getElementById("weekly");
var biweekly = document.getElementById("biweekly");
var monthly = document.getElementById("monthly");



//preference

var capsuleSelected = function(){
    document.getElementById("capsule").className="optionSelected";
    filter.className="option";
    espresso.className="option";

    document.getElementById("preference-selection").innerHTML="capsule";
    /* var y=document.getElementById("preference-selection").innerHTML;
    console.log(y) */

}

var filterSelected = function(){
    document.getElementById("filter").className="optionSelected";
    capsule.className="option";
    espresso.className="option";

    document.getElementById("preference-selection").innerHTML="filter";
    /* var x=document.getElementById("preference-selection").innerHTML;
    console.log(x) */

}

var espressoSelected = function(){
    espresso.className="optionSelected";
    capsule.className="option";
    filter.className="option";

    document.getElementById("preference-selection").innerHTML="espresso";

}

//bean

var originSelected = function(){
    origin.className="optionSelected";
    decaf.className="option";
    blended.className="option";

    document.getElementById("bean-selection").innerHTML="single origin";

}

var decafSelected = function(){
    decaf.className="optionSelected";
    origin.className="option";
    blended.className="option";

    document.getElementById("bean-selection").innerHTML="decaf";

}

var blendedSelected = function(){
    blended.className="optionSelected";
    origin.className="option";
    decaf.className="option";

    document.getElementById("bean-selection").innerHTML="blended";

}

//quantity

var grams250Selected = function(){
    grams250.className="optionSelected";
    grams500.className="option";
    grams1000.className="option";

    document.getElementById("quantity-selection").innerHTML="250g";

}

var grams500Selected = function(){
    grams500.className="optionSelected";
    grams250.className="option";
    grams1000.className="option";

    document.getElementById("quantity-selection").innerHTML="500g";

}

var grams1000Selected = function(){
    grams1000.className="optionSelected";
    grams250.className="option";
    grams500.className="option";

    document.getElementById("quantity-selection").innerHTML="1000g";

}

//grind

var wholeBeanSelected = function(){
    wholeBean.className="optionSelected";
    filterGrind.className="option";
    cafetiere.className="option";

    document.getElementById("grind-selection").innerHTML="whole bean";
}

var filterGrindSelected = function(){
    filterGrind.className="optionSelected";
    wholeBean.className="option";
    cafetiere.className="option";

    document.getElementById("grind-selection").innerHTML="filter";
}

var cafetiereSelected = function(){
    cafetiere.className="optionSelected";
    filterGrind.className="option";
    wholeBean.className="option";

    document.getElementById("grind-selection").innerHTML="cafetiére";
}


//delivery

var weeklySelected = function(){
    weekly.className="optionSelected";
    biweekly.className="option";
    monthly.className="option";

    document.getElementById("delivery-selection").innerHTML="weekly";
}

var biweeklySelected = function(){
    biweekly.className="optionSelected";
    weekly.className="option";
    monthly.className="option";

    document.getElementById("delivery-selection").innerHTML="biweekly";
}

var monthlySelected = function(){
    monthly.className="optionSelected";
    biweekly.className="option";
    weekly.className="option";

    document.getElementById("delivery-selection").innerHTML="monthly";
}

capsule.onclick(capsuleSelected());