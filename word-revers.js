function wordRevers(text){
    const mySentence = text.split(' ');
    let words = [];
    for(let i = mySentence.length-1; i >= 0; i--){
        let element = mySentence[i];
        words.push(element);
    }
    const reversedString = words.join(' ')
    return reversedString;
}
const myString ='I am a good boy';
const reversed = wordRevers(myString);
console.log(reversed);