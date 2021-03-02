// Tuple uses arrays to specify the type of elements based on their position
// Used where the data is  related and its time span is short 
// Like returning multiple values from the method
// Tuples are defined according to the number of items they define
// Tuples that define more items than 7 are known as n-type tuples
//  Pair      : 2 items
//  Triple    : 3 items
//  Quadruple : 4 items
//  Quintuple : 5 items
//  Sextuple  : 6 items
//  Septuple  : 7 items

let poem : [ string, number, boolean];


// on accessing the type by index the type is known and will be checked by the compiler 
// The values must be set in order of their types
poem = ["Name of the poem", 2000, true]

console.log(poem.length)




// poem[0] = "The first argument is of type string";
// poem[1] = 123;
// poem[2] = true;

// Can't set property 0 of undefined
// console.log(poem)


