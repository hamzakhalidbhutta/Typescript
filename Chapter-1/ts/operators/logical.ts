/* 
    * Logical operators
          •   &&    logical and
          •   ||    logical or
          •   !     logical not 
*/
let x:number,y:number
x=2;y=0
// any number other than 0 is treated as true and 0 is treated as false
// So, true && false = false 
if(x&&y)
    console.log("if body executed")
else 
    console.log("else body executed")