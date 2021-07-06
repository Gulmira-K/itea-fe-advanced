/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arrs) {
  let newArr = []
  arrs.forEach(arr => {
    const maxNum = arr.reduce((prev, num) => {
      return prev < num ? num : prev
    })
    newArr.push(maxNum)
  })
  return newArr
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))