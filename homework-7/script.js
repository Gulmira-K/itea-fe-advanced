// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  const lettersArray = str.split(' ').map((binary) => {
    return String.fromCharCode(parseInt(binary, 2));
  });

  return lettersArray.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  pre = collection.find(elem => !elem[pre]);
  return !pre;
}

console.log(truthCheck([
  { "user": "Tinky-Winky", "sex": "male" },
  { "user": "Dipsy", "sex": "male" },
  { "user": "Laa-Laa", "sex": "female" },
  { "user": "Po", "sex": "female" }
], "sex"));


// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

const addTogether =(a, b)=> {
  if (typeof a !== 'number' || typeof b !== 'number' && b !== undefined) {
    return undefined;
  }
  
  if (b) return a + b;

  return c => addTogether(a, c)
}

console.log(addTogether(2, 3))


// Make a Person
// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

let Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return  fullName.split(' ')[0];
  }

   this.getLastName = function () {
     return  fullName.split(' ')[1];
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function (first) {
    return fullName = `${first} ${fullName.split(' ')[1]}`;
  }

  this.setLastName = function (last) {
    return fullName = `${fullName.split(' ')[0]} ${last} `;
  }

  this.setFullName = function (firstAndLast) {
    return fullName = firstAndLast;
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName());

// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// T = 2PI * SQRT[R^3 / GM]

function orbitalPeriod(arr) {
  const GM = 398600.4418,
        earthRadius = 6367.4447;
  
  let R,
      T;
  
  arr = arr.map(elem => {
    if (elem.hasOwnProperty('avgAlt')) {
      R = earthRadius + elem['avgAlt'];
      T = Math.round((Math.PI * 2) * (Math.sqrt(Math.pow(R, 3) / GM)));

      elem['orbitalPeriod'] = elem['avgAlt'];
      delete elem['avgAlt'];
      
      elem['orbitalPeriod'] = T;
      
      return elem;
    }
  })

  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));