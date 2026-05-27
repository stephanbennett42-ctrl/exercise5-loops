const numbers = [1,2,3,4,5];

console.log("-- Task 1: For Loop printing each number --");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("--Task 2: While loop counting down from 5 to 1--");
let count = 5;
while (count>=1) {
    console.log(count);
    count--;
}

console.log("--Task 3: Loop printing only even numbers--");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("--Task 4: Loop calculating the sum of the array--");
let sum = 0;
for(let i =0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Total sum", sum);
