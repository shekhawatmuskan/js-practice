// 1️⃣ map() - transform array values
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Map Result:", doubled);

// 2️⃣ filter() - filter elements based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Filter Result:", evenNumbers);

// 3️⃣ reduce() - accumulate to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduce Result (Sum):", sum);

// reduce() - build object
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Reduce Result (Object):", fruitCount);

// 4️⃣ forEach() - loop through elements
numbers.forEach((num, index) => {
  console.log(`ForEach Item ${index}:`, num);
});

// 5️⃣ Chaining map() and filter()
const result = numbers.map((num) => num * 3).filter((num) => num > 10);
console.log("Chained Result:", result);

// 6️⃣ reduce() - flatten nested array
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened Array:", flat);

// =======================================
// 2️⃣ EXPLANATION SECTION
// =======================================

// 1️⃣ map() - Transform array values
// - Purpose: Creates a **new array** by applying a function to every element of the original array.
// - Does NOT modify the original array.
// - Syntax: array.map(callback(currentValue, index, array))
// - Example below doubles each number in `numbers`.
// - Output: [2, 4, 6, 8, 10]

// 2️⃣ filter() - Filter elements based on a condition
// - Purpose: Creates a **new array** with only those elements that pass the test condition.
// - Does NOT modify the original array.
// - Syntax: array.filter(callback(currentValue, index, array))
// - Example below filters even numbers from `numbers`.
// - Output: [2, 4]

// 3️⃣ reduce() - Accumulate or reduce array to a single value
// - Purpose: Executes a reducer function on each element, resulting in a single output value.
// - Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// - Example below calculates the sum of all elements.
// - Output: 15

// 🧮 reduce() - Build object (count frequency)
// - Purpose: Use reduce() to accumulate values into an object.
// - Example counts how many times each fruit appears in the array.
// - Output: { apple: 3, banana: 2, orange: 1 }

// 4️⃣ forEach() - Loop through elements
// - Purpose: Executes a provided function once for each array element.
// - Does NOT return anything (undefined).
// - Used when you just want to perform side effects like logging.
// - Syntax: array.forEach(callback(currentValue, index, array))
// - Output:
//   ForEach Item 0: 1
//   ForEach Item 1: 2
//   ...

// 5️⃣ Chaining map() and filter()
// - Purpose: Combine array methods to perform multiple transformations in sequence.
// - map() runs first → triples each number.
// - filter() then keeps numbers greater than 10.
// - Output: [12, 15]

// 6️⃣ reduce() - Flatten a nested array
// - Purpose: Merge sub-arrays into a single array.
// - Works by concatenating each inner array into an accumulator.
// - Output: [1, 2, 3, 4, 5, 6]

// =======================================
// SUMMARY TABLE
// =======================================
/*
Concept                   | Description / Key Idea
---------------------------|-------------------------------------------------------------
map()                      | Transforms each element and returns a new array
filter()                   | Returns elements that satisfy a given condition
reduce() (Sum)             | Accumulates array values into a single output
reduce() (Object Builder)  | Builds an object (like frequency count) from array elements
forEach()                  | Executes a function for each element (no return)
map() + filter() Chaining  | Apply multiple transformations together in sequence
reduce() (Flatten Array)   | Converts nested arrays into a single flat array
Return Value Behavior      | map/filter/reduce return new arrays; forEach returns undefined
Mutation Behavior           | None of these modify the original array directly
Use Case Summary           | map → transform | filter → select | reduce → summarize | forEach → iterate
*/
