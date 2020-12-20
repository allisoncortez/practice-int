// //1. convert a given number to words
// function convertToWords(int) {
//     length = int.toString().length
  
//     //list of the possible words
//     const lessThanTen = [];
//     lessThanTen[0] = '';
//     lessThanTen[1] = 'one';
//     lessThanTen[2] = 'two';
//     lessThanTen[3] = 'three';
//     lessThanTen[4] = 'four';
//     lessThanTen[5] = 'five';
    
//     if (int === 0){
//       return 'type in a valid number'
//     } else if (length === 1) {
//       return lessThanTen[int]
//       // console.log('werkin..')
//     } 
//     return console.log('Invalid: Only Numbers 1 - 9')
//   }
  
//   // what if it was 1-20, how to make this more efficient?
  
//   console.log(convertToWords(10))

//2. write a function that takes in a string and returns the reverse version of that string.
// function reverseStr(str){
//     const newStr = str.split('').reverse().join('')
//     return newStr
// }

//3. write a fn() that takes in a string and is able to check if it's a palindrome or not.
// function palindromeCheck(str){
//     const newStr = str.split('').reverse().join('')
//     return (str === newStr)
// }

//4. write a fn() that takes in a string and is able to return the max character in that str
function maxChar(str){
    const charMap = {};
    let max = 0;
    let maxChar = '';

    // iterate through string, count chars
    // {a: 2, b: 2}
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    // check which one is used most.. in comparisn to max
    for(let char in charMap) {
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar
    
}
console.log(maxChar('abba'))