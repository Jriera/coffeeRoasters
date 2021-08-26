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
    document.getElementById("preference-selection-modal").innerHTML="capsule";
    

}

var filterSelected = function(){
    document.getElementById("filter").className="optionSelected";
    capsule.className="option";
    espresso.className="option";

    document.getElementById("preference-selection").innerHTML="filter";
    document.getElementById("preference-selection-modal").innerHTML="filter";
   
}

var espressoSelected = function(){
    espresso.className="optionSelected";
    capsule.className="option";
    filter.className="option";

    document.getElementById("preference-selection").innerHTML="espresso";
    document.getElementById("preference-selection-modal").innerHTML="espresso";

}

//bean

var originSelected = function(){
    origin.className="optionSelected";
    decaf.className="option";
    blended.className="option";

    document.getElementById("bean-selection").innerHTML="single origin";
    document.getElementById("bean-selection-modal").innerHTML="single origin";

}

var decafSelected = function(){
    decaf.className="optionSelected";
    origin.className="option";
    blended.className="option";

    document.getElementById("bean-selection").innerHTML="decaf";
    document.getElementById("bean-selection-modal").innerHTML="decaf";

}

var blendedSelected = function(){
    blended.className="optionSelected";
    origin.className="option";
    decaf.className="option";

    document.getElementById("bean-selection").innerHTML="blended";
    document.getElementById("bean-selection-modal").innerHTML="blended";

}

//quantity

var grams250Selected = function(){
    grams250.className="optionSelected";
    grams500.className="option";
    grams1000.className="option";

    document.getElementById("quantity-selection").innerHTML="250g";
    document.getElementById("quantity-selection-modal").innerHTML="250g";

}

var grams500Selected = function(){
    grams500.className="optionSelected";
    grams250.className="option";
    grams1000.className="option";

    document.getElementById("quantity-selection").innerHTML="500g";
    document.getElementById("quantity-selection-modal").innerHTML="500g";

}

var grams1000Selected = function(){
    grams1000.className="optionSelected";
    grams250.className="option";
    grams500.className="option";

    document.getElementById("quantity-selection").innerHTML="1000g";
    document.getElementById("quantity-selection-modal").innerHTML="1000g";

}

//grind

var wholeBeanSelected = function(){
    wholeBean.className="optionSelected";
    filterGrind.className="option";
    cafetiere.className="option";

    document.getElementById("grind-selection").innerHTML="whole bean";
    document.getElementById("grind-selection-modal").innerHTML="whole bean";
}

var filterGrindSelected = function(){
    filterGrind.className="optionSelected";
    wholeBean.className="option";
    cafetiere.className="option";

    document.getElementById("grind-selection").innerHTML="filter";
    document.getElementById("grind-selection-modal").innerHTML="filter";
}

var cafetiereSelected = function(){
    cafetiere.className="optionSelected";
    filterGrind.className="option";
    wholeBean.className="option";

    document.getElementById("grind-selection").innerHTML="cafetiére";
    document.getElementById("grind-selection-modal").innerHTML="cafetiére";
}


//delivery

var weeklySelected = function(){
    weekly.className="optionSelected";
    biweekly.className="option";
    monthly.className="option";

    document.getElementById("delivery-selection").innerHTML="weekly";
    document.getElementById("delivery-selection-modal").innerHTML="weekly";
}

var biweeklySelected = function(){
    biweekly.className="optionSelected";
    weekly.className="option";
    monthly.className="option";

    document.getElementById("delivery-selection").innerHTML="biweekly";
    document.getElementById("delivery-selection-modal").innerHTML="biweekly";
}

var monthlySelected = function(){
    monthly.className="optionSelected";
    biweekly.className="option";
    weekly.className="option";

    document.getElementById("delivery-selection").innerHTML="monthly";
    document.getElementById("delivery-selection-modal").innerHTML="monthly";
}

var pricing = function(){
    var weeklyCost=(parseFloat(document.getElementById("weekly-price").innerHTML))*4;
    console.log(weeklyCost);
    var biweeklyCost=(parseFloat(document.getElementById("biweekly-price").innerHTML))*2;
    console.log(biweeklyCost);
    var monthlyCost=(parseFloat(document.getElementById("monthly-price").innerHTML));
    console.log(monthlyCost);

    if(document.getElementById("delivery-selection").innerHTML==="weekly"){
        document.getElementById("price").innerHTML=weeklyCost;
    }

    else if(document.getElementById("delivery-selection").innerHTML==="biweekly"){
        document.getElementById("price").innerHTML=biweeklyCost;

    }

    else if(document.getElementById("delivery-selection").innerHTML==="monthly"){
        document.getElementById("price").innerHTML=monthlyCost;
    }

    document.getElementById("modal").style.display="block";
    document.getElementById("modal-wrapper").style.display="block";
}

var modalClose= function(){
    document.getElementById("modal-wrapper").style.display="none";
}

var hamburgerMenu = function(){
    let x = document.getElementById("menu");
    let y = document.getElementById("hamburger");
    if(x.style.display==="flex"){
      x.style.display="none";
    }
    else {
      x.style.display="flex";
    }

    if(y.getAttribute("src")==="./assets/shared/mobile/icon-hamburger.svg"){
        y.setAttribute("src","./assets/shared/mobile/icon-close.svg");
    }
    else{
      y.setAttribute("src","./assets/shared/mobile/icon-hamburger.svg");
    }
}

