"use strict"

// Input Elements 

const iceCreamConeRadio = document.getElementById("iceCreamConeRadio");
const iceCreamCupRadio = document.getElementById("iceCreamCupRadio");
const inputHotFudge= document.getElementById("inputHotFudge");


window.onload = function() {
    iceCreamConeRadio.onclick = toggleToppingsRowVisability;
    iceCreamCupRadio.onclick = toggleToppingsRowVisability;
    

};

function toggleToppingsRowVisability(){
    console.log("toggle");

    let shouldBeVisible = iceCreamCupRadio.checked;
    console.log(shouldBeVisible);


    if(shouldBeVisible){
        // toppingsRow.style ="block";
        toggleToppingsRowVisibility.style.visibility ="visible";
    }

    else {
        // toppingsRow.style.display ="none";
        toggleToppingsRowVisibility.style.visibility ="hidden";
    }
};













































// // Output elements
// const outBasePrice = document.getElementById("outputBasePrice");
// const outputTax = document.getElementById("outputTax");
// const outputTotalDue = document.getElementById("outputTotalDue");


// window.onload = function(){
//     submitOrderButton.onclick = submitOrderButtonClick;
// };
// function onEstimateTotalCostButton() {
//     // get known values
//     let numOfDays = Number



