
// "use strict";

 // Input Elements
 const iceCreamType1 = document.getElementById("iceCreamCone");
  const iceCreamType2 = document.getElementById("iceCreamCup");
 const toppingsRow = document.getElementById("toppingsRow");
const submitOrderButton = document.getElementById("submitOrderButton");

window.onload = function () {
    iceCreamCone.onclick = toggleToppingsRowVisibility;
    iceCreamCup.onclick = toggleToppingsRowVisibility;
    
};


// Function to toggle toppings row visibility
function toggleToppingsRowVisibility() {
    console.log("toggle");

    let shouldBeVisible = iceCreamCup.checked; 
    console.log(shouldBeVisible);

    if (shouldBeVisible) {
        toppingsRow.style.visibility = "visible";
    } else {
         toppingsRow.style.visibility = "hidden";
    }
}




submitOrderButton.addEventListener("click", function() {
    
 });

