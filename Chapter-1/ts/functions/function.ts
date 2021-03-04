/* 
*   Used to write readable, maintable and reuseable code
*   Mostly functions are written as methods in typescript. 
*   Several places that can be annotated with type information
        *   parameter can be given a type annotation   
*/

function getAverage(a: number, b:number,c:number): number{
    return (a+b+c)/3.0;
}
console.log(getAverage(1,4,9))