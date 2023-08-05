// function maxNumber(){
//     const jade = 75;
//     const jimmy = 69;
//     const chinku = 95;
//     if(jade > jimmy && jade > chinku){
//         return'Jade is first';
//     }
//     else if(jimmy > jade && jimmy > chinku){
//         return'jimmy is first';
//     }
//     else{
//         return'chinku is first'
//     }
// }
// const result = maxNumber();
// console.log(result);


// Same problem with parameter 

function maxNumber(jade, jimmy, chinku){
    if(jade > jimmy && jade > chinku){
        return'Jade is first';
    }
    else if(jimmy > jade && jimmy > chinku){
        return'jimmy is first';
    }
    else{
        return'chinku is first'
    }
}

const num1 = 75;
const num2 = 79;
const num3 = 45;
const result = maxNumber(num1, num2, num3);
console.log(result);