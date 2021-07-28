// STRINGS: hw: startsWith, endsWith, repeat, includes

// Object: asign, is
//HM: function mixin

// startsWith

let str = 'hello'

startsWith('he')

function startsWith(searchStr, position = 0) {
  return str.slice(position, searchStr.length) === searchStr
}


// endsWith
endsWith('llo')

function endsWith(searchStr) {
  return str.slice(-searchStr.length) === searchStr
}

// repeat

