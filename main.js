
// Changing CSS style dynamically

function addStyle() {
var mayVar = document.querySelector("#pera");
    mayVar.classList.add("pera-style");
    // mayVar.style.color="red";
    // mayVar.style.fontSize = "3rem";
    // mayVar.style.fontWeight = "bold";
    // mayVar.style.fontStyle = "italic";

}

function reomveStyle() {
    var mayVar = document.querySelector("#pera");
    mayVar.classList.remove("pera-style");
}