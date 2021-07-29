// POLYFILLS:
// STRINGS: startsWith, endsWith, repeat, includes
// OBJECT: function mixin


// startsWith()

const str = 'hello';

startsWith('he');

function startsWith(searchStr, position = 0) {
  if (!searchStr.length || typeof str !== 'string') {
    throw new Error('No string provided')
  }

  if(position) {
    return str.slice(position, searchStr.length + 1) === searchStr;
  } else {
    return str.slice(position, searchStr.length) === searchStr;
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

let repeated = [], i;

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

const sentence = 'Find if word is included',
      word = 'if';

includes(sentence, word)

function includes(sentence, word) {
  if (!sentence.length || !word.length || typeof sentence !== 'string' || typeof word !== 'string') {
    throw new Error('No sentence or word provided')
  }

  const sentenceArr = sentence.split(' '), newArray = [];

  for (i = 0; i < sentenceArr.length; i += 1) {
    if (sentenceArr[i] === word) {
        newArray.push(word)
    }
  }

  if (newArray.length) {
    console.log(`${word} is found in ${sentence}`)
  } else {
    console.log(`${word} is NOT found in ${sentence}`)
  }
}


// mixin

const obj = { a: 1, b: 2, c: 3 },
  obj1 = { c: 4, d: 5 };

let prop;
      
mixin(obj, obj1);

function mixin(target, source) {
  if (typeof target !== 'object' || typeof source !== 'object') {
    throw new Error('No objects found')
  }

  for (prop in source) {
    if (source.hasOwnProperty(prop)) {
      target[prop] = source[prop]
    }
    return target
  }
}