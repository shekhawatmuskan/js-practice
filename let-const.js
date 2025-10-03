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
