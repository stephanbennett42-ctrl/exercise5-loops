//1. User input validation(with error handling)
/**
 * Validates a user's registration input.
 * Throws specific errors if validation fails.
 * @param {Object} user - The user object to validate.
 */
function validateUserInput(user) {
  if (!user|| typeof user != 'object') {throw new TypeError("Invalid input: User data must be vaild object.");   
  }
  // check for username
  if(!user.username || typeof user.username !== 'string'){
    throw new TypeError(" Validation Error: Username is required and must be a string.");
   }
  if (user.username.trim().length < 3) {
      throw new Error("Validation Error: Username must be at least 3 characters long.");
    }
  // check for age
  if (user.age === undefined || user.age === null) {
    throw new TypeError("Validation Error: Age is Reguired.");
  }
  if (typeof user.age !== 'number' || Number.isNaN(user.age)) {
        throw new TypeError("Validation Error: Age must be a valid number.");
    }
  if (user.age < 18 || user.age > 120) {
        throw new RangeError("Validation Error: Age must be between 18 and 120.");
    }
  return " User input is perfectly valid!";
}

//2. Demonstratting Multiple Error Types
/**
 * Simulates different operations that cause standard JavaScript errors
 * and handles them dynamically using a try-catch block.
 * @param {string} errorType - The type of error scenario to trigger.
 */

function demonstrateMultipleErrors(errorType) {
  try {
    switch (errorType.toLowerCase()) {
      case 'reference':
        // Causes a RerferenceError because nonExistentVariable is not defined
        console.log(nonExistentVariable);
        break;
        case 'range':
          // Casues a RangeError because an array cannot have a negative length
          let badArray = new Array(-5);
          break;

          case 'type':
            // causes a TyperError because you cannot call a method on null
            let nullValue = null;
            nullValue.toUpperCase();
            break;
default:
                console.log(`No error simulated for type: "${errorType}"`);
        }
    } catch (error) {
        console.error(` Captured an Expected Error!`);
        console.error(`- Name: ${error.name}`);
        console.error(`- Message: ${error.message}\n`);
      }
}

// 3. String Manipuilation Helper Function

const StringHelpers ={
  //capitalizes the first letter of each word in a string
  capitalize: (str) => {
    if (typeof str != 'string') return '';
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  
  truncate: (str, maxLength) => {
    if (typeof str !== 'string' || typeof maxLength !== 'number') return '';
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  },
/**
     * Reverses a given string.
     */
    reverse: (str) => {
        if (typeof str !== 'string') return '';
        return str.split('').reverse().join('');
    }
};
// 4. Array Operattions Helper Functions
const ArrayHelpers ={
  /**
     * Calculates the average of an array of numbers.
     */
    calculateAverage: (arr) => {
        if (!Array.isArray(arr) || arr.length === 0) return 0;
        const sum = arr.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
        return sum / arr.length;
    },

    removeDuplicates: (arr) => {
        if (!Array.isArray(arr)) return [];
        return [...new Set(arr)];
    },
/**
     * Finds the maximum value in a numeric array.
     */
    findMax: (arr) => {
        if (!Array.isArray(arr) || arr.length === 0) return undefined;
        // Filter out non-numbers just in case to avoid NaN issues
        const numericArray = arr.filter(item => typeof item === 'number');
        return Math.max(...numericArray);
    }
};



//5. Deomanstration & Test Cases
// Running this file via Node.js will generate the console output for your instructor.

console.log("   RUNNING ERROR HANDLING & UTILITY TEST SUITE   ");

// --- Testing User Input Validation ---
console.log("--- 1. Testing validateUserInput() ---");
const validUser = { username: "Alice_99", age: 25 };
const invalidUser = { username: "Jo", age: 15 }; // Will trigger errors

try {
    console.log(validateUserInput(validUser)); // Should pass
    console.log("Attempting to validate invalid user...");
    validateUserInput(invalidUser); // Should fail
} catch (error) {
    console.error(`[Caught Expected Validation Failure] -> ${error.name}: ${error.message}\n`);
}

// --- Testing Multiple Error Types ---
console.log("--- 2. Testing demonstrateErrorTypes() ---");
demonstrateMultipleErrors('reference');
demonstrateMultipleErrors('range');
demonstrateMultipleErrors('type');

// --- Testing String Helpers ---
console.log("--- 3. Testing String Helpers ---");
const sampleText = "javascript is awesome";
console.log(`Original: "${sampleText}"`);