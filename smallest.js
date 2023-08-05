function findSmallestNumber(numbers){
    let SmallestNumber = numbers[0];
    for(i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number < SmallestNumber){
            SmallestNumber = number
        }
    }
    return SmallestNumber;
}
const height =[167, 190, 120, 165, 137, 150, 201, 110];
console.log(findSmallestNumber(height));