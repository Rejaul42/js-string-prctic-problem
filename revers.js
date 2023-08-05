function stringRevers(text){
    let reversedText = '';
    for(let i = text.length-1; i >= 0; i--){
        let element = text[i];
        reversedText = reversedText + element;
    }
    return reversedText;
}

const text = 'I am a good boy';
const reversed = stringRevers(text);
console.log(reversed);