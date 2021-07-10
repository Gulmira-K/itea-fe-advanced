var str = 'romtor'

//IMPERATIVE MANNER

let i,
    length = str.length,
    polindrome = '';

for (i = length - 1; i >= 0; i -= 1) {
  polindrome += str[i]
}

console.log(polindrome.toLowerCase() === str.toLowerCase())


// DECLARATIVE MANNER

// function palindrome(str) {
//   return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
// }
// palindrome(str)