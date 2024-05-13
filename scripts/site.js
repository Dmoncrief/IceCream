"use strict"

// Input Elements 

const iceCreamType1 = document.getElementById("iceCreamType1");
const iceCreamType2 = document.getElementById("iceCreamType2");
const inputHotFudge = document.getElementById("inputHotFudge");
const inputSprinkles = document.getElementById("inputSprinkles");
const inputWhippedCream = document.getElementById("inputWhippedCream");
const inputCherry = document.getElementById("inputCherry");



window.onload = function () {
    iceCreamType1.onclick = toggleToppingsRowVisability;
    iceCreamType2.onclick = toggleToppingsRowVisability;
    

};

function toggleToppingsRowVisability(){
    console.log("toggle");

    let shouldBeVisible = iceCreamCupRadio.checked;
    console.log(shouldBeVisible);


    if(shouldBeVisible){
        // toppingsRow.style.display ="block";
        toggleToppingsRowVisibility.style.visibility = "visible";
    }

    else {
        // toppingsRow.style.display ="none";
        toggleToppingsRowVisibility.style.visibility = "hidden";
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



