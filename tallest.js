function findTallestNumber(numbers){
    let largestNumber = numbers[0];
    for(i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number > largestNumber){
            largestNumber = number
        }
    }
    return largestNumber;
}
const height =[167, 190, 120, 165, 137, 150, 201];
console.log(findTallestNumber(height));