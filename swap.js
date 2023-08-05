let num1 = 5;
let num2 = 7;
console.log(num1, num2);

// one way to swap value 

// const tamp = num1;
// num1 = num2;
// num2 = tamp;
// console.log(num1, num2);

// another way to swap value (Destructuring)

[num1, num2] = [num2, num1];
console.log(num1, num2)