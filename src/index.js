const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
function decode(expr) {
    let letter = [];
    let letterMorse = '';
    let realLetter = '';
    let result = '';
    let realLetterMassiv = [];
    for (let i = 0; i < expr.length; i = i + 10){
          let a = expr.slice(i, i + 10);
         letter.push(a);
    }
    for (let j = 0; j < letter.length; j++) {
        for (let k = 0; k < 10; k = k + 2) {
         let findNum = `${letter[j][k]}${letter[j][k + 1]}`;
            if (findNum === '00'){
               letterMorse = `${letterMorse}`;
            } else if (findNum === '10'){
             letterMorse = `${letterMorse}.`;
            } else if (findNum === '11'){
            letterMorse = `${letterMorse}-`;
            } else if (letter[j] === '**********'){
            letterMorse = `${letterMorse}`;
            }
        }
        realLetterMassiv.push(letterMorse);
        letterMorse = '';
        
     }
        
    for (let m = 0; m < realLetterMassiv.length; m++){
        for (let key in MORSE_TABLE) {
            if (realLetterMassiv[m] === key){
                realLetter = MORSE_TABLE[key];
                result = `${result}${realLetter}`;
            }
            
        }
        if (realLetterMassiv[m] === '') {
                let space = ' ';
                result = `${result}${space}`;
            }
    }  
    return result;// write your solution here
}

module.exports = {
    decode
}