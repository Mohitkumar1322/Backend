1) CALLBACKS — Deep Dive
🧾 Definition (Hinglish)

Callback ek function hota hai jo doosre function ko as argument pass kiya jaata hai, aur woh callback jab asli kaam complete ho jata hai tab call hota hai. Ye JS ka earliest async pattern hai.

🔍 Types of callbacks

Error-first (Node-style)
Signature: function(err, result) — Node core me common.
Example: fs.readFile(path, (err, data) => { ... })

Success-only callbacks
Sirf success-pass karte hain: cb(result)

Higher-order callbacks / functional callbacks
Jo map/filter/reduce me diya jata ho.

Synchronous callbacks vs Asynchronous callbacks

Synchronous: Immediately run (e.g., arr.forEach(cb) where cb runs immediately).

Asynchronous: setTimeout, I/O — run later.

✅ Example — Error-first (Node-style)
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File contents:', data);
});

❗ Problems / Pitfalls

Callback hell / Pyramid of Doom — nested callbacks unreadable.

Inversion of control — callback ko diya hua control milta hai (caller dependent on callee behaving).

Multiple callback calls — callee galti se callback ko 2+ baar call kare toh issues.

Error handling — hard to propagate & manage errors in deep nests.

🔧 Patterns to manage callbacks

Modularize: break into functions, avoid nesting.

Guard flags: ensure callback executes once.

Use Promises or util.promisify to migrate.