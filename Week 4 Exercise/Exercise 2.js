function sum(num){
  //check if the value is a number and is an integer without using banned methods
  if (typeof num !== 'number'|| num % 1 !==0){
    return "The value passed is not a number";
  }
  let total = 0;
  //loop from 0 up to and including the parameter
  for (let i = 0; i <= num; i++){
    total += i;
  }
  return total;
}
//testing the code
console.log(sum(5)); // should return 15 (0+1+2+3+4+5)
console.log(sum("Hello")); // should return "The value passed is not a number"
console.log(sum(5.5)); // should return "The value passed is not a number"

function factorial(num){
  //Handle edge case for 0 or 1 immediately
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  //start at the number and muiltiply down to 1
  for (let i = num; i> 0; i--){
    result *= i;
  }
  return result;
}
//testing the code
console.log(factorial(4)); // should return 24 (4*3*2*1)

function funkyMath(){
  let count = arguments.length;

  if (count === 2 ){
    // Subtract the first from the second
    return arguments[1] - arguments[0];
  }
  else if (count === 3){
    // add all 3 numbers toghter
    return arguments[0] + arguments[1] + arguments[2];
  }
  else if (count === 4){
    // (arg1 + arg2) divided by (arg3 +arg4)
    let group1 = arguments [0]+ arguments[1];
    let group2 = arguments[2] + arguments[3];
    return group1 /group2;
  }
  else {
    return "Invalid number of arguments";
  }
}

//Testing the code 
console.log(funkyMath(5, 12)); // should return 7 (12-5)
console.log(funkyMath(1,2,3)); // should return 6 (1+2+3)
console.log(funkyMath(8,2,3,5)); // shoould return 1.25 ((8+2) / (3+5))

let currentArray = [1,2,33,45,6,44];
let oddnumbers = [];
// Lopp through the orginal array
for (let i =0; i < currentArray.length; i++){
  //check if the number is odd
  if (currentArray[i] % 2 !== 0){
    oddnumbers.push(currentArray[i]);
  }
}
console.log(oddnumbers); // should return [1, 33, 45]

//TODO: Create the Object
let me = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  favoriteColor: "blue",
  dreamCar: "Porsche 911"
};

//TODO: Add a new property
me.favoriteFood = "Pizza";

//TODO: Delete the age property
delete me.age;

//final object check
console.log(me);

