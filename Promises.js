2) PROMISES — Deep Dive
🧾 Definition (Hinglish)

Promise ek object hai jo future me kisi asynchronous operation ka result (resolve) ya reason (reject) hold karta hai. Promises synchronous stack se alag microtask queue me run karte hain — isliye predictable chaining possible hai.

🔁 States of a Promise

pending — initial

fulfilled (resolved) — success value available

rejected — error available

Once settled (fulfilled/rejected) → state immutable.

🔨 Creating a Promise
const p = new Promise((resolve, reject) => {
  // async work
  if (success) resolve(value);
  else reject(error);
});

🔗 Key methods / APIs

p.then(onFulfilled, onRejected) — chaining

p.catch(onRejected) — error handling shortcut

p.finally(onFinally) — runs regardless of outcome

Static helpers:

Promise.all(iterable) — sab promises resolve tab resolved; agar koi reject → immediate reject

Promise.race(iterable) — first settle (resolve/reject) decides

Promise.allSettled(iterable) — wait for all, return statuses

Promise.any(iterable) — resolves on first fulfilled; rejects if all rejected

✅ Promise Example — Basic
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data mil gaya'), 1000);
  });
}

getData()
  .then(res => console.log(res))
  .catch(err => console.error(err));

✅ Promise Chaining
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error('Error anywhere:', err));

🔍 Promise Combinators — Use-cases

Promise.all → parallel work, sab successful hona chahiye (e.g., fetch multiple resources).

Promise.race → implement timeout: race(fetchPromise, timeoutPromise)

Promise.allSettled → when you need result of all, even if some fail (e.g., bulk tasks)

Promise.any → first success (e.g., try mirrors and take first successful)

⚠️ Pitfalls & Gotchas

Uncaught rejections — if reject and no catch, Node warns (or may crash in future).

Memory leak if promises never settled or listeners kept.

Nested promises — avoid returning non-promise in chain incorrectly; always return promises in .then to chain properly.

🔁 Converting Callback → Promise

Node has util.promisify:

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

🧠 Microtask vs Macrotask (Important concept)

Promises use microtask queue → .then callbacks run before next macrotask (setTimeout).
Example:

console.log('start');
Promise.resolve().then(() => console.log('promise'));
setTimeout(()=>console.log('timeout'), 0);
console.log('end');
// Output: start, end, promise, timeout
