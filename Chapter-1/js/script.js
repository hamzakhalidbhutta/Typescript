/*
    *   When the plus operator is used with only a single argument, it acts as a shorthand conversion to a number.
    *   The unary minus operator also converts the type to number and changes its sign.
*/
var str = '5';
// 5: number
var convertToNum = +str;
console.log(convertToNum);
// -5: number
var negative = -str;
console.log(negative);
