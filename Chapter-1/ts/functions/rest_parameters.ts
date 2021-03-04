function sum(a:string , ...b: number[]): string{
    let sum = 0 ;
    for(let i = 0; i< b.length;i++)
    {
        sum = b[i] + sum;
    }
    return a+sum;
}

console.log(sum(" The sum is: ",1,2,3,4,5,6,7,8,9,))
/*
    Rest parameters allow calling code to specify zero or more arguments of the specified type. For the
    arguments to be correctly passed, rest parameters must follow these rules
    •	 Only one rest parameter is allowed.
    •	 The rest parameter must appear last in the parameter list.
    •	 The type of a rest parameter must be an array type.
    To declare a rest parameter, prefix the identifier with three periods 
    ensure that the type annotation is an array type
    Your function should expect to receive any number of arguments, including none. In your compiled
JavaScript code, you will see that the compiler has added code to map the arguments list to your array
variable within the method body.
■ Note If you require that at least one argument is passed, you would need to add a required parameter
before the rest parameter to enforce this minimum requirement. This would be the correct signature for the
getAverage function in Listing 1-57 to avoid a potential divide-by-zero error.
*/ 