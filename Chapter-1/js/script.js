/*
  *   In TypeScript, binary operators are used with two variables of
         • type number
         • any, when using with the any type, ensure it contains a number.
  *   Result of an operation is always a number.
  *   Binary operators: - * / % << >> >>> & ^ |
  *   The plus (+) operator is a special case:
        • mathematical addition
        • concatenation operator.
  *   Operation chosen depends on the type of the variables on either side of the operator.
  *   JavaScript programs in which an intended addition results in the concatenation of the two values, resulting in an unexpected value.
  *   This will be caught in a TypeScript program if you try to
        • assign a string to a variable of the number type
        • try to return a string for a function that is annotated to return a number.
  *   The rules for determining the type resulting from a plus operation are the following:
        • If the type of either of the arguments is a string, the result is always a string.
        • If the type of both arguments is either number or enum, the result is a number.
        • If the type of either of the arguments is any, and the other argument is not a string, the result is any.
        • In any other case, the operator is not allowed
*/
// 6:number
var num = 5 + 1;
console.log(num);
// '51': string
var str = 5 + '1';
console.log(str);
