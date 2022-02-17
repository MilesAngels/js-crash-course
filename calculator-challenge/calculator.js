let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = 0;
let sumPar = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add() {
    sum = num1 + num2;
    sumPar.innerText = `Sum: ${sum}`;
}

function subtract() {
    let diffPar = document.getElementById("sum-el");
    let difference = num1 - num2;
    diffPar.innerText = `Difference: ${difference}`;
}

function divide() {
    let quotientPar = document.getElementById("sum-el");
    let quotient = num1 / num2;
    quotientPar.innerText = `Quotient: ${quotient}`;
}

function multiply() {
    let productPar = document.getElementById("sum-el");
    let product = num1 * num2;
    productPar.innerText = `Product: ${product}`;
}