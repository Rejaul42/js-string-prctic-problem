// function findMaxNumber() {
//     const jade = 75;
//     const jimmy = 85;
//     const chinku = 92;
//     const maxNumber = Math.min(jade, jimmy, chinku);
//     return maxNumber;
// }
// console.log(findMaxNumber());


//  Same problem with parameter 

function findMaxNumber(num1, num2, num3) {
    const maxNumber = Math.max(num1, num2, num3);
    return maxNumber;
}
const jade = 75;
const jimmy = 85;
const chinku = 92;
console.log(findMaxNumber(jade, jimmy, chinku));