// 🔁 JavaScript is Asynchronous (non-blocking)
// JavaScript doesn't wait for asynchronous tasks (like fetch() or other promises) to complete before moving to the next line.

// So even if the fetch() is written after some other code, if the earlier code is also asynchronous and takes longer, fetch() might still resolve first.

// 💡 Example to Understand
// js
// Copy
// Edit
// // Code block 1 (promise that resolves in 3 seconds)
// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("First promise done");
//     resolve();
//   }, 3000);
// });

// // Code block 2 (fetch)
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log("Fetched data:", data));

// // Code block 3 (logs immediately)
// console.log("This log runs instantly");
// 👀 What You'll See in Console:
// bash
// Copy
// Edit
// This log runs instantly
// Fetched data: {userId: 1, id: 1, ...}
// First promise done
// ✅ Why This Happens
// fetch() starts asynchronously — it doesn’t block the next lines.

// The first promise also runs async (with setTimeout(3000)) — it takes 3 seconds.

// So fetch might complete earlier (because API responded faster than 3s).

// 🧠 Key Concept
// The order you write code ≠ the order in which async code finishes.

// JavaScript runs all async code independently, and whichever finishes first gets handled first.