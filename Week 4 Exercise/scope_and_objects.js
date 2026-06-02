// 1. Global Scope
// Create a global variable called globalCounter
let globalCount = 10;

// 2. Local Scope
// Create a function that demonstrates local scope
function localScopeDemo() {
  // This variable is local to this function and cannot be accessed outside
  let localMessage = "Hello from inside the local scope!";
  console.log(localMessage);
  console.log(`Accessing globalCount inside localScopeDemo: ${globalCount}`);
}

//3. Modifying scopes
// Create a function that tries to modify variables
function modifyScopes() {
  // Modifying the global variable
  globalCount = 42;
  console.log(`Modified globalCount inside modifyScopes: ${globalCount}`);
  try {
    localMessage = "Trying to change you";  
  } catch (error) {
    console.log("Error occurred when modifying localMessage.");
  }
}

//4. Constructors and Instances
// Create a student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
  this.greet = function() {
    return `Hi, my name is ${this.name} and I am in grade ${this.grade}.`;
  };
}

//Create several student instances
const student1 = new Student("Alice", 15, 10);
const student2 = new Student("Bob", 16, 11);
const student3 = new Student("Charlie", 14, 9);

// 5. Object Literals
//create an object literal with nested properties
const schoolAcademy = { // Fixed typo in object name
  name: "Greenwood High",
  location: "Downtown",
  facilities: {
    hasSportsComplex: true, 
    numberOfLabs: 4
  },
  principal: {
    name: "Dr. Smith",
    experienceYears: 12
  }
};

//Execution and Console Output Demonstration
console.log("--- Scope and Objects Demonstration ---");
console.log(`globalCount before modification: ${globalCount}`); 
modifyScopes(); 
console.log(`globalCount after modification: ${globalCount}`);

console.log("\n---Constructor and Instances Demonstration ---");
console.log(student1.greet());
console.log(student2.greet());
console.log(student3.greet());

console.log("\n---Object Literals Demonstration ---");
console.log(`School Name: ${schoolAcademy.name}`);
console.log(`Principal: ${schoolAcademy.principal.name}`);
console.log(`Has sports complex: ${schoolAcademy.facilities.hasSportsComplex}`);