// 1️⃣ CODE SECTION

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

// =======================================
// 2️⃣ EXPLANATION SECTION
// =======================================

// 1️⃣ Selecting elements
// - document.querySelector("selector") selects the first matching element in the DOM.
// - Example: heading = document.querySelector("h1") → selects the first <h1> element.

// 2️⃣ Event listeners
// - addEventListener(event, callback) attaches a function to run when an event occurs.
// - Example: btn.addEventListener("click", ...) changes heading text and color when button is clicked.
// - input.addEventListener("input", ...) updates heading dynamically as the user types.

// 3️⃣ Event object
// - The callback receives an event object containing info about the event.
// - event.target → the element on which the event occurred.

// 4️⃣ Event bubbling & stopPropagation
// - By default, events bubble from child to parent elements.
// - Example: clicking ".child" triggers both child and parent listeners.
// - e.stopPropagation() prevents the event from bubbling up to parent elements.

// ✅ Key takeaways:
// - querySelector selects elements.
// - addEventListener handles events dynamically.
// - Event objects provide context (like event.target).
// - stopPropagation controls event flow.

// =======================================
// 3️⃣ SUMMARY TABLE
// =======================================

// Concept                | What it does
// -----------------------|--------------------------------------------
// querySelector          | Selects first element matching selector
// addEventListener       | Attaches event handler to element
// Event object           | Contains info about event (e.g., target element)
// event.target           | Element where event occurred
// input event            | Triggered when user types or changes value
// click event            | Triggered when element is clicked
// Event bubbling         | Event propagates from child → parent
// stopPropagation()      | Stops event from propagating to parent elements
