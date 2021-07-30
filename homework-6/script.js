// SET

const a = new Set([1, 2, 3])
const b = new Set([4, 3, 2])

// union()

const union = new Set([...a, ...b])
console.log(union)

// difference()

const difference = new Set([...a].filter(x => !b.has(x)))
console.log(difference)