// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = document.getElementById("count-el"); //target count-el so we can modify its content later
let counter = 0; //this will be our iterator
let saveElement = document.getElementById("save-el");

//funtion that iterates everytime we click the increment button
function increment() {
    counter++;
    count.textContent = counter;
}

//funtion saves the previous increment and output it
function save() {
    let prev = " " + counter + " - "; //variable for previous increments
    saveElement.textContent += prev; //update the saved element
    count.textContent = 0;
    counter = 0;
}
