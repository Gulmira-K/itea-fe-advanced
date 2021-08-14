// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example: n = 7 and arr=[1, 2, 1, 2, 1, 3, 2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

const sockMerchant = (...colors) => {
  let prop, pairsArr = [];

  const pairedSocksNum = colors.reduce((acc, color) => {
    acc[color] = acc[color] ? acc[color] + 1 : 1;
    return acc;
  }, {});

  for (prop in pairedSocksNum) {
    if ((pairedSocksNum[prop] % 2 && pairedSocksNum[prop] > 1) || !(pairedSocksNum[prop] % 2)) {
      pairsArr.push(pairedSocksNum[prop] - pairedSocksNum[prop] % 2);
    }
  };

  return  pairsArr.reduce((acc, number) => acc += (number / 2), 0);
}

console.log(sockMerchant(1, 2, 1, 2, 1, 3, 2, 4, 4, 4, 4))
console.log(sockMerchant('black', 'black', 'black', 'white', 'white', 'yellow'))


// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill U , or a downhill D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

const countingValleys = (steps) => {
  const stepsArray = steps.split('');
  
  let valleyCounter = 0, altitude = 0;

  stepsArray.forEach( step => {
    if (step === 'U') {
      altitude += 1;
    } else {
      altitude -= 1;
    }
    
    if (altitude === 0 && (step === 'U' || step === 'D')) {
      valleyCounter += 1;
    } 
  })

  return valleyCounter;
}

console.log(countingValleys('UDDUUUDD'));


// There is a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus.
// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
// The player must avoid the thunderheads.Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud.
// It is always possible to win the game.
// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

const jumpingOnClouds = (...clouds) => {
  const cloudsArray = clouds,
        length = cloudsArray.length;
  
  let jumps = 0, i = 0;

  do {
    if (cloudsArray[i] === 1 || cloudsArray[i + 2] === 0) {
      i += 2;
    } else {
      i += 1;
    }
  
    jumps += 1;

  } while (i < length - 1);
  
  return jumps;
}

console.log(jumpingOnClouds(0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0));


// There is a string, s, of lowercase English letters that is repeated infinitely many times. 
// Given an integer, n, find and print the number of letter a's in the first  letters of the infinite string.

const repeatedString = (str, n) => {
  const string = str,
        repeation = Math.floor(n / string.length),
        restLength = n % string.length,
        restLetters = string.substring(0, restLength),
        repeatingPhrase = string.repeat(repeation) + restLetters;
  
  return repeatingPhrase.split('').filter(letter => letter === 'a').length;
}

console.log(repeatedString('aba', 13));