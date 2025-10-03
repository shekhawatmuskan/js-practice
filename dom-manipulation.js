// DOM Manipulation Practice

// Select elements
let heading = document.querySelector("h1");
let btn = document.querySelector(".btn");
let input = document.querySelector("#nameInput");

// Change heading text on button click
btn.addEventListener("click", () => {
  heading.textContent = "Button was clicked!";
  heading.style.color = "blue";
});

// Update heading live as user types
input.addEventListener("input", (event) => {
  heading.textContent = `Hello, ${event.target.value}`;
});

// Event bubbling demo
document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation(); // stops bubbling
});
