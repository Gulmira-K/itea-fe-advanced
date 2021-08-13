// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example: n = 7 and arr=[1, 2, 1, 2, 1, 3, 2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

const sockMerchant = (...colors) => {
  let prop, pairsNum, pairsArr = [];

  const pairedSocksNum = colors.reduce((acc, color) => {
    acc[color] = acc[color] ? acc[color] + 1 : 1;
    return acc;
  }, {});

  for (prop in pairedSocksNum) {
    if ((pairedSocksNum[prop] % 2 && pairedSocksNum[prop] > 1) || !(pairedSocksNum[prop] % 2)) {
      pairsArr.push(pairedSocksNum[prop] - pairedSocksNum[prop] % 2);
    }
  };

  pairsNum = pairsArr.reduce((acc, number) => acc += (number / 2), 0);

  return pairsNum;
}

console.log(sockMerchant(1, 2, 1, 2, 1, 3, 2, 4, 4, 4, 4))
console.log(sockMerchant('black', 'black', 'black', 'white', 'white'))