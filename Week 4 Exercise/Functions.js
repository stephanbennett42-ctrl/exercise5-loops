// 1.Multiply Three Distinct Numbers
function multiply(num1, num2, num3) {
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "Error: The arguments passed must NOT be the same Number";
  }
  return num1 * num2 * num3;
}

// 2. Convert Minutes to seconds
const convertToSeconds = function(minutes){
  return minutes * 60;
};

// 3. Fahrenheit to Celsius Converter
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// 4. Reverse a string (FIXED: Added the missing 'r' to reverseString)
function reverseString(str){
  //split string into array, reverse array and joins it back to a string
  return str.split('').reverse().join('');
}

// 5. Count Vowels in a string
function countVowels(sentence){
  const vowels = ['a', 'e','i','o','u','A','E','I','O','U'];
  let count = 0;

  for(let char of sentence){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}

// 6. Check if a number is Prime
function isPrime(num){
  if (num <= 1) return false; //1 and below are not prime numbers
  //check for divisors from 2 up to the square root of the number
  for (let i = 2; i<= Math.sqrt(num); i++){
    if (num % i === 0) {
      return false; //found a divisor, so its not prime
    }
  }
  return true;
}

// Testing the Code
console.log("1. Multiply");
console.log(multiply(2, 3, 4));
console.log(multiply(2, 2, 4));

console.log("2. convertToSeconds ---");
console.log(convertToSeconds(5));

console.log("3. fahrenheitToCelsius ---");
console.log(fahrenheitToCelsius(68)); 

console.log("4. reverseString ---");
console.log(reverseString("hello")); // This will now match perfectly!

console.log("5. countVowels ---");
console.log(countVowels("Javascript"));

console.log("--- 6. isPrime (4 Tests) ---");
console.log(`Is 7 prime? ${isPrime(7)}`); 
console.log(`Is 4 prime? ${isPrime(4)}`); 
console.log(`Is 11 prime? ${isPrime(11)}`);
console.log(`Is 1 prime? ${isPrime(1)}`);