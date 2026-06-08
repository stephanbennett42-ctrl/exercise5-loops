// TODO: Create a multiline string using template literals
const stufftoKnow = `Multiline String of Things
Things to know:
- Purple is amazing
- Coding is fun
- Pinterest is a great source of inspiration`;

console.log("1. Multiline String Output ");
console.log(stufftoKnow);
console.log("\n");


// TODO: Create a function that uses template literals for HTML generation
const generateUserCard = (name, role, status) =>
  `
<div class="user-card">
    <h2>${name}</h2>
    <p>Role: ${role}</p>
    <span class="badge ${status === "active" ? "bg-success" : "bg-danger"}">${status}</span>
</div>`.trim();

console.log("2. HTML Generation Output ");
const htmlOutput = generateUserCard(
  "Alexis Meade",
  "Magazine Publisher",
  "active",
);
console.log(htmlOutput);
console.log("\n");


// TODO: Convert regular functions to arrow functions
const calculateArea = (width, height) => width * height;

console.log("3. Arrow Function Conversion ");
console.log(`Area of 10x5 rectangle: ${calculateArea(10, 5)}`);
console.log("\n");


// TODO: Use arrow functions with array methods
const sourceNumbers = [1, 2, 3, 4, 5, 6];

const squaredEvenNumbers = sourceNumbers
  .filter((num) => num % 2 === 0) // Filters out odd numbers
  .map((num) => num ** 2);        // Squares the remaining even numbers

console.log("4. Array Methods with Arrow Functions ");
console.log("Original Array:", sourceNumbers);
console.log("Squared Even Numbers:", squaredEvenNumbers);