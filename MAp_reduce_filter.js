// 🚀 1) map() — Transforming Data

// map = data ko ek form se dusre form me convert karna.

// Backend me ye sab jagah use hota hai:

// ✅ Use-Case 1: DB se aane wale raw data ko clean/convert karna

// MongoDB response:

const users = [
  { _id: "1", first: "Mohit", last: "Kumar", age: 22 },
  { _id: "2", first: "Ravi", last: "Singh", age: 25 },
];


//Tum API response me ye return karna chahte ho:

[
  { id: "1", fullName: "Mohit Kumar" },
  { id: "2", fullName: "Ravi Singh" }
]


//Backend:

const result = users.map(u => ({
  id: u._id,
  fullName: `${u.first} ${u.last}`
}));

//✅ Use-Case 2: Sanitizing API Input

//For example, user ne email uppercase me di:

req.body.emails.map(e => e.toLowerCase().trim());

//✅ Use-Case 3: Bulk API calls (Parallel Promises)
const urls = ["api1.com", "api2.com", "api3.com"];

const promises = urls.map(url => fetch(url));
const responses = await Promise.all(promises);


//Yeh backend me very important hai — queue processing, batch jobs, cron tasks, etc.

//🚀 2) filter() — Removing Unwanted Data

// filter = list se unwanted elements hata do.

// Backend daily use:

// ✅ Use-Case 1: Sensitive data hata kar API response dena

// MongoDB data:

const users = [
  { name: "Mohit", isActive: true },
  { name: "Ravi", isActive: false },
  { name: "Ajay", isActive: true }
];


//Sirf active users return:

const activeUsers = users.filter(u => u.isActive);

//✅ Use-Case 2: Permissions / Access Control

//Agar user ko sirf certain items dekhne ki permission hai:

const visibleItems = items.filter(item => item.role === user.role);

//✅ Use-Case 3: Rate-limit / Validation

//User ne 10 IDs bheji hain, par sirf valid IDs hi aage bhejni:

const validIds = ids.filter(id => mongoose.isValidObjectId(id));

//✅ Use-Case 4: Server Logs filtering
const errors = logs.filter(log => log.level === "error");

🚀 3) reduce() — Aggregation / Summaries / Final Calculation

//reduce = data ko accumulate karna → single value ya object me convert.

//Backend me yeh sabse useful hai:

// ⭐ Real Backend Reduce Use-Cases
// ✅ Use-Case 1: Total price calculate (E-commerce backend)

//Cart:

const cart = [
  { name: "Shoes", price: 2000, qty: 2 },
  { name: "T-shirt", price: 800, qty: 1 }
];


//Backend:

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);


Output:

total = 4800

//✅ Use-Case 2: Grouping data (VERY IMPORTANT)

//Log entries ko route wise group karna:

const logs = [
  { route: "/login", time: 20 },
  { route: "/home", time: 5 },
  { route: "/login", time: 15 }
];


//Group by route:

const grouped = logs.reduce((acc, log) => {
  if (!acc[log.route]) acc[log.route] = [];
  acc[log.route].push(log.time);
  return acc;
}, {});


//Result:

{
  "/login": [20, 15],
  "/home": [5]
}

//✅ Use-Case 3: Counting frequency

//(Analytics, logging, rate limiting)

//For example, count how many times each status code came:

const statusCodes = [200, 200, 404, 500, 200];

const count = statusCodes.reduce((acc, code) => {
  acc[code] = (acc[code] || 0) + 1;
  return acc;
}, {});


//Output:

{ 200: 3, 404: 1, 500: 1 }

//✅ Use-Case 4: Merging multiple arrays/data from APIs
const allUsers = allPages.reduce((all, page) => {
  return all.concat(page.users);
}, []);

//✅ Use-Case 5: Creating lookup tables (fast querying)
const users = [
  { id: 1, name: "Mohit" },
  { id: 2, name: "Rahul" }
];

const map = users.reduce((acc, u) => {
  acc[u.id] = u;
  return acc;
}, {});


Ab O(1) lookup:

map[1]; // Mohit