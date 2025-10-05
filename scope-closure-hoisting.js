// ------------------ SCOPE ------------------

// 1. Global Scope
let globalVar = "I'm global!";
function accessGlobal() {
  console.log(globalVar);
}
accessGlobal();

// 2. Function Scope
function functionScopeExample() {
  var localVar = "I'm local!";
  console.log(localVar);
}
functionScopeExample();
// console.log(localVar); // ❌ Error

// 3. Block Scope
{
  let blockVar = "I'm block-scoped!";
  const blockConst = "Block constant!";
  console.log(blockVar, blockConst);
}
// console.log(blockVar); // ❌ Error

// 4. Lexical Scope
function outer() {
  let outerVar = "I'm from outer scope!";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();

// ------------------ HOISTING ------------------

// 1. var Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = "This is hoisted!";
console.log(hoistedVar);

// 2. let and const Hoisting (Temporal Dead Zone)
// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = "TDZ Example";

// 3. Function Declaration Hoisting
greet();
function greet() {
  console.log("Hello from hoisted function!");
}

// 4. Function Expression (Not Hoisted)
// sayHi(); // ❌ TypeError
var sayHi = function () {
  console.log("Hi from function expression!");
};
sayHi();

// ------------------ CLOSURES ------------------

// 1. Basic Closure Example
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", count);
  };
}
const counter1 = makeCounter();
counter1();
counter1();
counter1();

// 2. Closure for Data Privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ${amount}, Remaining: ${balance}`);
      } else {
        console.log("Insufficient funds!");
      }
    },
    getBalance: function () {
      console.log(`Current Balance: ${balance}`);
    },
  };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
account.getBalance();

// 3. Closure in Event Listener
function handleClick() {
  let count = 0;
  return function () {
    count++;
    console.log(`Button clicked ${count} times`);
  };
}
const clickHandler = handleClick();
document.body.addEventListener("click", clickHandler);

// =======================================
// 2️⃣ EXPLANATION SECTION
// =======================================

// 1️⃣ Global Scope
// - Variables declared outside any function or block are globally scoped.
// - Accessible anywhere in the code.
// - `accessGlobal()` can access `globalVar` because it’s in global scope.
// - Output:
//   I'm global!

// 2️⃣ Function Scope
// - Variables declared with `var` inside a function are function-scoped.
// - They exist only within that function.
// - Accessing them outside the function causes a ReferenceError.
// - Output:
//   I'm local!

// 3️⃣ Block Scope
// - `let` and `const` are block-scoped: accessible only inside {}.
// - Once outside the block, they are not defined.
// - Useful for controlling variable lifetime and preventing leaks.
// - Output:
//   I'm block-scoped! Block constant!

// 4️⃣ Lexical Scope
// - Inner functions can access variables of their outer functions — this is lexical scoping.
// - The scope chain is created at the time of function definition, not during execution.
// - Output:
//   I'm from outer scope!

// 5️⃣ var Hoisting
// - `var` declarations are hoisted to the top of their scope.
// - They are initialized as undefined until the actual line of assignment executes.
// - That’s why the first log prints undefined instead of an error.
// - Output:
//   undefined
//   This is hoisted!

// 6️⃣ let and const Hoisting (Temporal Dead Zone)
// - `let` and `const` are hoisted but not initialized.
// - Accessing them before declaration triggers a ReferenceError.
// - The area between hoisting and initialization is called the Temporal Dead Zone (TDZ).
// - Output:
//   ReferenceError: Cannot access 'hoistedLet' before initialization

// 7️⃣ Function Declaration Hoisting
// - Function declarations are fully hoisted, including their definitions.
// - You can call the function before it appears in the code.
// - Output:
//   Hello from hoisted function!

// 8️⃣ Function Expression (Not Hoisted)
// - Function expressions are not hoisted as callable functions.
// - The variable is hoisted, but its value is undefined until assigned.
// - Calling it before assignment throws a TypeError.
// - Output (after correct call):
//   Hi from function expression!

// 9️⃣ Basic Closure Example
// - A closure is a function that remembers variables from its outer scope even after that outer function finishes execution.
// - Each call to the returned function updates and retains the previous value.
// - Output:
//   Count: 1
//   Count: 2
//   Count: 3

// 🔟 Closure for Data Privacy
// - Closures allow data encapsulation — variables like `balance` are private.
// - Only the returned functions can access or modify them.
// - This mimics private variables in object-oriented programming.
// - Output:
//   Deposited: 50, New Balance: 150
//   Withdrawn: 30, Remaining: 120
//   Current Balance: 120

// 11️⃣ Closure in Event Listener
// - Each event handler retains access to its lexical scope due to closure.
// - The variable `count` persists between clicks, maintaining state across calls.
// - Demonstrates state persistence without global variables.
// - Output (each click):
//   Button clicked 1 times
//   Button clicked 2 times
//   Button clicked 3 times

// =======================================
// 3️⃣ SUMMARY TABLE
// =======================================

/*
Concept                 | Description / Key Idea
-------------------------|----------------------------------------------------------
Global Scope             | Variables accessible everywhere
Function Scope           | `var` is visible only inside its function
Block Scope              | `let` and `const` exist only inside {}
Lexical Scope            | Inner functions can access outer scope variables
var Hoisting             | Declared at top, initialized as undefined
let/const Hoisting (TDZ) | Hoisted but inaccessible before initialization
Function Declaration     | Hoisted completely; can call before defining
Function Expression      | Not hoisted as callable function
Closure (Definition)     | Function remembers variables from its outer scope
Data Privacy with Closure| Hide and protect variables from outside access
Event Listener Closure   | Remembers previous state across multiple calls
*/
