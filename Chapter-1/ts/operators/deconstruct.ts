// Destructuring allows you to unpack an array or object into named variables. 
// triangle numbers being unpacked into two variables that capture the first and second items in the array.
// Once the array has been destructured, the named variables contain the values. The original array is not
// affected by the destructuring.


// Array destructuring
const numberArray = [1, 3, 6, 10, 15, 21];
// Destructuring
// const [first, second] = triangles1;
// TypeScript Language Features

// 1
// console.log(first);
// 3
// console.log(second);


// You can also use rest parameters when destructuring. Rest parameters are preceded by the three-dot (...)
// prefix and crop up in other areas too, such as functions. The rest parameter must appear last in the list, and
// it will receive all the values left after the named arguments have been unpacked. Listing 1-42 adds a rest
// parameter to the triangle number example.
// Array destructuring with a rest parameter

// Destructuring with a rest argument
// const [one, two, ...remaining] = numberArray;
// 1
// console.log(one);
// 3
// console.log(two);
// [6, 10, 15, 21]
// console.log(remaining);


// You can skip items in the array by leaving blank spaces between commas, as shown in Listing 1-43
// where the third item is skipped. You can skip as many items as you wish, by simply not specifying a variable
// name.
// Skipping items
// Skipping third item
// const [one, two, , four] = numberArray;
// 1
// console.log(one);
// 3
// console.log(two);
// [10]
// console.log(four);

// Variable swapping without introducing intermediate using a destructuring assignment
// let a = 3;
// let b = 5;
// Swapping
// [a, b] = [b, a];
// 5
// console.log(a);
// 3
// console.log(b);


// You can also use destructuring to unpack objects
// The syntax for object destructuring is slightly different
// The left-hand side of the expression looks like an object literal, but where
// the values are actually the new variables that will be assigned the values that appear on their left. You can
// think of destructuring as array literals that extract data, and object literals that extract data.
// Object destructuring
// const highSchool1 = { school: 'Central High', team: 'Centaurs' };
// Object destructuring
// const { school: s, team: t } = highSchool1;
// 'Central High'
// console.log(s);
// 'Centaurs'
// console.log(t);


// You can also auto-unpack objects if you use variable names that match the property names.
// In Listing 1-46 the variables use the same names as the members of the high school object: school and team.
// Auto-unpacking
// const highSchool2 = { school: 'Central High', team: 'Centaurs' };
// Auto-unpacking
// const { school, team } = highSchool2;
// 'Central High'
// console.log(school);
// 'Centaurs'
// console.log(team);


// When you use a rest parameter in object destructuring, it will result in an object containing all the
// properties that you didn’t explicitly unpack. Listing 1-47 demonstrates object destructuring rest parameters.
// Object destructuring with rest parameter
// const pets = { cat: 'Pickle', dog: 'Berkeley', hamster: 'Hammy'}
// Object destructuring
// const { dog, ...others } = pets;
// 'Berkeley'
// console.log(dog);
// Object { cat: 'Pickle', hamster: 'Hammy'}
// console.log(others);
// If you destructure past the available values, the result will be undefined, as shown in Listing 1-48, where
// the fourth variable will be undefined because the array only has three items.

// Destructuring past available values
// const [first, second, third, fourth] = triangles4;
// undefined
// console.log(fourth);


// To mitigate against undefined values, you can supply default values as part of the destructuring
// expression. Listing 1-49 shows default values for the third and fourth variables. Because there are three items
// in the array, the third variable has the value 6, but the fourth variable gets the default value of -1, instead of
// being undefined.
// const triangles5 = [1, 3, 6];
// Destructuring past available values
// const [first, second, third = -1, fourth = -1] = triangles5;
// 6
// console.log(third);
// -1
// console.log(fourth);
// Tuples and destructuring are a powerful combination. If you have a method that returns a tuple, you
// can immediately destructure it into named variables. This keeps the lifespan of the tuple type as short as
// possible and expresses the return value better by making each variable explicit. Listing 1-50 shows the
// tuple/destructuring combination in action.
// Returning a tuple
// function getThreeLandmarks(): [string, string, string] {
//  return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum '];
// }
// Destructuring the tuple into named variables
// const [sanFrancisco, london, rome] = getThreeLandmarks();
// Destructuring is valuable when it makes your code more readable. Although you could do some clever
// stuff with destructuring, the smart move is to judge whether it results in code that expresses the intent better,
// or whether it just makes the code confusing. The examples in this section are all very conservative uses of
// the feature and are concise, but readable.