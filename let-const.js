// 1️⃣ Code Section

// 1. let & const
let count = 10;
count = 15;
console.log("Count:", count);

const pi = 3.14;
// pi = 3.14159; // ❌ error
console.log("PI:", pi);

// 2. Arrow Functions
const square = (n) => n * n;
console.log("Square of 5:", square(5));

// Lexical this
const person = {
  name: "Muku",
  greetNormal: function () {
    console.log("Hello, I'm " + this.name);
  },
  greetArrow: () => {
    console.log("Hello, I'm " + this.name); // undefined
  },
};
person.greetNormal();
person.greetArrow();

// 3. Template Literals
const user = "Muku";
const role = "Frontend Dev";
console.log(`User: ${user}, Role: ${role}`);

// 4. Spread & Rest
const numbers = [1, 2, 3];
const more = [...numbers, 4, 5];
console.log("Spread Array:", more);

function addAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log("Sum:", addAll(1, 2, 3, 4));

const { a, ...others } = { a: 10, b: 20, c: 30 };
console.log("a:", a);
console.log("others:", others);

// ==============================
// 2️⃣ Explanation Section
// ==============================

// 1️⃣ let & const
// - `let` allows reassignment and is block-scoped.
//   Example: count starts at 10 → updated to 15 → logs Count: 15.
// - `const` cannot be reassigned, also block-scoped.
//   Example: pi is 3.14 → trying to reassign pi = 3.14159 throws an error.
// ✅ Key takeaway: Use let when value changes, const when it shouldn’t change.

// 2️⃣ Arrow Functions & Lexical this
// - (n) => n * n → arrow function shorthand for function square(n) { return n * n; }
// - Logs: Square of 5: 25
// - greetNormal → regular function, `this` refers to the object → logs Hello, I'm Muku.
// - greetArrow → arrow function, `this` is lexically inherited → undefined in strict mode.
// ✅ Key takeaway: Arrow functions don’t have their own `this`; regular functions do.

// 3️⃣ Template Literals
// - Backticks `` allow string interpolation: insert variables inside ${}.
// - Logs: User: Muku, Role: Frontend Dev
// - Cleaner than "User: " + user + ", Role: " + role.

// 4️⃣ Spread & Rest Operators
// - Spread (`...`) expands iterables: [...numbers, 4, 5] → [1,2,3,4,5].
// - Rest (`...`) collects remaining arguments: function addAll(...args) collects all args into an array.
// - Object destructuring with rest: const {a, ...others} = {a:10, b:20, c:30} separates a from the rest.
// ✅ Key takeaway: Spread expands items, Rest collects them.

// ==============================
// 3️⃣ Summary Table
// ==============================

// Concept          | What it does
// -----------------|----------------------------
// let              | Reassignable variable
// const            | Constant variable (cannot reassign)
// Arrow function   | Short syntax, no own this
// Template literal | String interpolation with ${}
// Spread ...       | Expand array/object
// Rest ...         | Collect remaining arguments/properties
// Lexical this     | Arrow functions inherit this from parent
