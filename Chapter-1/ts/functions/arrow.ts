const shortAddNumbers = (a: number, b: number) => a + b;
const mediumAddNumbers = (a: number, b: number) => {
 return a + b;
}
const longAddNumbers = function (a: number, b: number) {
 return a + b;
}

/**
 * Sometimes the single expression to be returned by an arrow function will be an object
 * for example,
    { firstName: 'Mark', lastName: 'Rendle' }
 * The braces around the object declaration confuse the TypeScript compiler. 
 * So you need to mark it as an expression by surrounding it with parentheses
 */

 const person = ( a:string,b:number) => ({name:a,age:b})

//  lexical Scoping

const scopeLosingExample = {
 text: "Property from lexical scope",
 run: function () {
 setTimeout(function () {
 alert(this.text);
 }, 1000);
 }
};
// alerts undefined
scopeLosingExample.run();
const scopePreservingExample = {
 text: "Property from lexical scope",
 run: function () {
 setTimeout(() => {
 alert(this.text);
 }, 1000);
 }
};
// alerts "Property from lexical scope"
scopePreservingExample.run();

/**
 * Behind the scenes, the TypeScript compiler creates a variable named _this just before the arrow
function is defined and sets its value to the current value of this. It also substitutes any usages of this
within the function with the newly introduced _this variable, so the statement now reads _this.text in the
JavaScript output. The use of the _this variable inside the function creates a closure around the variable,
which preserves its context along with the function. You can follow this pattern yourself, which is useful if
you ever need both the original meaning of this as well as the functionally scoped meaning of this, such as
when you are handling events 
**/