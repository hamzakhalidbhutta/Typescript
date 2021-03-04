// Spread Operator
// The spread operator does the opposite of destructuring and can be used to pack arrays and objects using a
// shallow copy. The spread operator works with properties, but sadly not methods. Listing 1-51 shows array
// spreading, resulting in the values being packed into the new array. The spread operator reuses the rest
// parameter syntax once again.
// Listing 1-51. Array spreading
const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];
// Array spreading
const squaresAndPowers = [...squares, ...powers];
// [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
console.log(squaresAndPowers);
// The syntax is almost identical for object spreading, as shown in Listing 1-52, resulting in an object with
// all the members of both input objects. If the same member appears on both objects, the last assignment
// wins and overwrites any previous value.
const emergencyService = {
 police: 'Chase',
 fire: 'Marshall',
};
const utilityService = {
 recycling: 'Rocky',
 construction: 'Rubble'
};

// Object spreading
const patrol = { ...emergencyService, ...utilityService };
// { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
console.log(patrol);
// You can even use the spread operator for function arguments; the code in Listing 1-53 causes the
// function to be called with the individual numbers supplied in the hexagon array.

function add(a: number, b: number, c: number) {
 return a + b + c;
}
const hexagons = [1, 6, 15];
// Spread operator in function call
const result = add(...hexagons);
// 22
console.log(result);
// One of the primary benefits of the spread operator is that it removes the need for loop syntax in many
// scenarios, which makes your code more readable and more expressive.