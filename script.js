// =============================
// Part 1: JavaScript Basics
// =============================
// Variable declarations
let userName = "Alice";
let userAge = 20;
let isStudent = true;

// Conditional logic
if (userAge >= 18) {
    document.getElementById("basics-output").textContent = `${userName} is an adult.`;
} else {
    document.getElementById("basics-output").textContent = `${userName} is a minor.`;
}

// =============================
// Part 2: Functions
// =============================
// Function to calculate sum of two numbers
function sum(a, b) {
    return a + b;
}

// Function to greet a user
function greet(name) {
    return `Hello, ${name}!`;
}

// Functions to display results in the DOM
function showSum() {
    const result = sum(5, 7);
    document.getElementById("functions-output").textContent = `Sum of 5 and 7 is ${result}`;
}

function showGreeting() {
    const greeting = greet(userName);
    document.getElementById("functions-output").textContent = greeting;
}

// =============================
// Part 3: Loops
// =============================
// For loop example: List numbers 1-5
function showLoops() {
    let output = "Numbers 1 to 5: ";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    // While loop example: Countdown from 3
    output += "| Countdown: ";
    let count = 3;
    while (count > 0) {
        output += count + " ";
        count--;
    }
    document.getElementById("loops-output").textContent = output;
}

// =============================
// Part 4: DOM Manipulation
// =============================
// 1. Toggle color of the list
function toggleColor() {
    const list = document.getElementById("dom-list");
    list.classList.toggle("color-toggled");
    document.getElementById("dom-output").textContent = "Toggled list color!";
}

// 2. Add a new item to the list
function addListItem() {
    const list = document.getElementById("dom-list");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
    document.getElementById("dom-output").textContent = "Added a new list item.";
}

// 3. Listen for click events on the list
const domList = document.getElementById("dom-list");
domList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        document.getElementById("dom-output").textContent = `You clicked: ${e.target.textContent}`;
    }
});

// All parts are clearly commented and organized as required.
