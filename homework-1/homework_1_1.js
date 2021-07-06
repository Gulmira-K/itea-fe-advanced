/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
  */

function validateParens(string) {
  let charactersArray = string.split('').reduce((accumulator, character) => {
    let openParens = ['(', '[', '{']
    let closeParens = [')', ']', '}']
 
    if (openParens.indexOf(character) !== -1) {
      accumulator.push(character)  
    } else if (closeParens.indexOf(character) !== -1 &&
      closeParens.indexOf(character) === openParens.indexOf(accumulator[accumulator.length - 1])) {
        accumulator.pop();
    } else {
      accumulator.push("invalid")
    }
    
    return accumulator
  }, [])
  
  return !charactersArray.length
}

let str = '[)'
let str1 = '[())]'
let str2 = ')('
let str3 = '([{}])'

console.log(validateParens(str))
console.log(validateParens(str1))
console.log(validateParens(str2))
console.log(validateParens(str3))