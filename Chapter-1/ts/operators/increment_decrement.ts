// Increment (++) and Decrement (--) are only applied on:
// type any, enum and number only

// let counter = 0;
// do {
//   ++counter;
//   counter++;
//   console.log(counter);
// } while (counter < 10);

// while(counter < 10){
//     counter++
//     console.log(counter)

// }


// Enumerator
const enum Size {
    S = 10,
    M,
    L,
    XL,
}

let shirtSize : Size = Size.XL;
shirtSize = --shirtSize
console.log(shirtSize)