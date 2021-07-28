// STRINGS: hw: startsWith, endsWith, repeat, includes

// Object: asign, is
//HM: function mixin


// startsWith()

const str = 'hello';

startsWith('he');

function startsWith(searchStr, position = 0) {
  if (!searchStr.length || typeof str !== 'string') {
    throw new Error('No string provided')
  }

  if(position) {
    console.log(str.slice(position, searchStr.length + 1) === searchStr);
  } else {
    console.log(str.slice(position, searchStr.length) === searchStr);
  }
}


// endsWith()

endsWith('llo');

function endsWith(searchStr) {
  if (!searchStr.length  || typeof str !== 'string') {
    throw new Error('No string provided')
  }

  return str.slice(-searchStr.length) === searchStr;
}


// repeat()

let repeated = [];
let i;

repeat(str, 3.5);

function repeat(str, times) {
  if (!str.length || typeof str !== 'string') {
    throw new Error('No string provided');
  }

  if (times === undefined || times === Infinity) {
    throw new Error('Incorrect number of repetitions');
  }

  for (i = 0; i < parseInt(times); i += 1) {
    repeated[i] = str;
  }

  return repeated.join(' ');
}


// includes()

const sentence = 'Find if word is included'
const word = 'no'

includes(sentence, word)

function includes(sentence, word) {
  if (!sentence.length || !word.length || typeof sentence !== 'string' || typeof word !== 'string') {
    throw new Error('No sentence or word provided')
  }

  const sentenceArr = sentence.split(' ')

  for (i = 0; i <= sentenceArr.length - 1; i += 1) {
    if (sentenceArr[i] === word) {
      console.log(word + ' is found in ' + sentence)
    } else {
      console.log(word + ' is NOT found in ' + sentence)
    }
  }
}