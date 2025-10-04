// 1️⃣ CODE SECTION

//  Basic Promise
const basicPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Basic Promise: Operation succeeded!");
  else reject("Basic Promise: Operation failed!");
});

basicPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Basic Promise: Operation finished.\n"));

//  Promise Chaining
new Promise((resolve) => resolve(5))
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((result) => console.log("Promise Chaining Result:", result, "\n"));

//  Promise.all() - Parallel execution
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 1000));
const p3 = 30;

Promise.all([p1, p2, p3])
  .then((values) => console.log("Promise.all Values:", values, "\n"))
  .catch((err) => console.error(err));

// Promise.race() - First resolved
const race1 = new Promise((res) => setTimeout(() => res("Race1 done"), 500));
const race2 = new Promise((res) => setTimeout(() => res("Race2 done"), 100));

Promise.race([race1, race2]).then((result) =>
  console.log("Promise.race Result:", result, "\n")
);

//  Async/Await - Basic
async function asyncBasic() {
  return "Async/Await: Hello, world!";
}

asyncBasic().then((res) => console.log(res, "\n"));

//  Async/Await with Promise
function getNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(42), 1000));
}

async function showNumber() {
  const result = await getNumber();
  console.log("Async/Await Result:", result, "\n");
}

showNumber();

//  Async/Await with Error Handling
async function fetchDataWithError() {
  try {
    const data = await Promise.reject("Async/Await: Something went wrong!");
    console.log(data);
  } catch (error) {
    console.error("Caught Error:", error);
  } finally {
    console.log("Async/Await: Operation finished.\n");
  }
}

fetchDataWithError();

//  Async/Await with Multiple Promises
const asyncP1 = () => new Promise((res) => setTimeout(() => res(10), 500));
const asyncP2 = () => new Promise((res) => setTimeout(() => res(20), 1000));

async function totalSum() {
  const results = await Promise.all([asyncP1(), asyncP2()]);
  console.log(
    "Async/Await Multiple Promises Sum:",
    results.reduce((a, b) => a + b, 0),
    "\n"
  );
}

totalSum();

//  Sequential vs Parallel Execution
const nums = [1, 2, 3];

async function sequentialExecution() {
  console.log("Sequential Execution Start");
  for (let n of nums) {
    const res = await new Promise((res) => setTimeout(() => res(n * 2), 500));
    console.log(res);
  }
  console.log("Sequential Execution End\n");
}

async function parallelExecution() {
  console.log("Parallel Execution Start");
  const promises = nums.map(
    (n) => new Promise((res) => setTimeout(() => res(n * 2), 500))
  );
  const results = await Promise.all(promises);
  console.log("Parallel Results:", results);
  console.log("Parallel Execution End\n");
}

sequentialExecution().then(() => parallelExecution());

//  Async Generator (Advanced)
async function* asyncGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

(async () => {
  console.log("Async Generator Start");
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
  console.log("Async Generator End\n");
})();

// =======================================
// 2️⃣ EXPLANATION SECTION
// =======================================

// 1️⃣ Basic Promise
// - A Promise is an object that represents a value that may be available now, later, or never.
// - In this example, `basicPromise` immediately checks `success = true`.
// - If true → it calls `resolve(...)` → the promise is fulfilled.
// - `.then()` runs when the promise is resolved (logs the success message).
// - `.catch()` runs if the promise rejects (not in this case).
// - `.finally()` runs regardless of success/failure, good for cleanup.
// - Output:
//   Basic Promise: Operation succeeded!

// 2️⃣ Promise Chaining
// - Each `.then()` receives the value from the previous `.then()`.
// - Step 1: Promise resolves with 5.
// - Step 2: first `.then()` → 5 * 2 = 10.
// - Step 3: second `.then()` → 10 + 10 = 20.
// - Step 4: final `.then()` logs 20.
// - This avoids "callback hell" by flattening async sequences.
// - Output: Promise Chaining Result: 20

// 3️⃣ Promise.all()
// - `Promise.all` runs multiple promises in parallel.
// - It waits for *all* promises to resolve, then returns their values in an array.
// - If any promise rejects, the whole thing rejects immediately.
// - Here:
//   p1 → instantly resolves with 10.
//   p2 → resolves after 1 second with 20.
//   p3 → just a number (auto-wrapped in a resolved Promise).
// - Final resolved array: [10, 20, 30].
// - Output (after 1 second): Promise.all Values: [10, 20, 30]

// 4️⃣ Promise.race()
// - `Promise.race` resolves/rejects as soon as the *first* promise settles.
// - race1 takes 500ms, race2 takes 100ms.
// - Since race2 finishes earlier, the result is "Race2 done".
// - Output (after 100ms): Promise.race Result: Race2 done

// 5️⃣ Async/Await (Basic)
// - Any `async function` always returns a Promise automatically.
// - Returning "Hello, world!" is equivalent to `return Promise.resolve("Hello, world!")`.
// - That’s why we can call `.then()` on it.
// - Output: Async/Await: Hello, world!

// 6️⃣ Async/Await with Promise
// - `getNumber()` returns a Promise that resolves with 42 after 1 second.
// - `showNumber()` is async, so it can use `await`.
// - `await getNumber()` pauses until the promise resolves → assigns 42 to `result`.
// - Then logs the value.
// - Output (after 1s): Async/Await Result: 42

// 7️⃣ Async/Await with Error Handling
// - `Promise.reject(...)` creates a rejected promise immediately.
// - `await` throws that rejection as an error inside async function.
// - Wrapped in try/catch:
//   → catch handles error: "Caught Error: Something went wrong!"
// - finally runs no matter what.
// - Output:
//   Caught Error: Async/Await: Something went wrong!
//   Async/Await: Operation finished.

// 8️⃣ Async/Await with Multiple Promises
// - Two async functions returning promises: 10 after 500ms, 20 after 1000ms.
// - `Promise.all` waits for both to resolve.
// - Results = [10, 20]. Then reduce adds them → 30.
// - Output (after 1s): Async/Await Multiple Promises Sum: 30

// 9️⃣ Sequential vs Parallel Execution
// - Sequential Execution: each number waits 500ms before resolving → executed one by one.
//   Timeline: ~1.5s total for all three numbers.
//   Output: 2, 4, 6
// - Parallel Execution: starts all promises together, waits for all with `Promise.all`.
//   Timeline: ~0.5s total (fastest).
//   Output: Parallel Results: [2, 4, 6]

// 🔟 Async Generator
// - `async function*` defines an async generator → yields promises.
// - Using `for await...of`, each yielded value is awaited before iterating.
// - Here it yields 1, 2, 3 in sequence.
// - Useful for handling data streams or async sequences step by step.
// - Output:
//   Async Generator Start
//   1
//   2
//   3
//   Async Generator End

// =======================================
// 3️⃣ SUMMARY TABLE
// =======================================

// Concept                          | What it does / Key Point
// ---------------------------------|-------------------------------------------------------
// Promise                           | Represents a future async value (resolve/reject)
// .then() / .catch() / .finally()  | Handle success, errors, and always-run logic
// Promise Chaining                  | Execute sequential operations in a chain
// Promise.all()                     | Run multiple promises in parallel; wait for all
// Promise.race()                    | Resolves/rejects as soon as first promise settles
// async function / await            | Syntactic sugar for promises; pause execution until resolved
// try/catch in async                | Error handling inside async functions
// Sequential Execution              | Promises executed one after another
// Parallel Execution                | Promises executed concurrently
// Async Generator (async function*) | Yield async values step-by-step; iterate with for await...of
