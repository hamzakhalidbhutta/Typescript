/**
 * 
 * Compile time scoping or simply when you write code and then it is compiled
 * Decisions of how the sopes will occur are made at that point
 * The compiler decides the value of a variable based in the local scope and if it cant find the value there
 * it will go to the parent for checking if the variable is defined there but not to the child
 * 
 * Lexical or Static Scoping:
 * Lexical scoping is also called static scoping
 * Lexical Scope allows inner functions to access the scope of their outer functions.
 * The values of the variable depends upon the layers they are defined in i.e check the most local scope
 * and then the outer scope and then the outer 
 * When JavaScript resolves a variable, it first searches the inner-most scope for that variable. If it can’t find the variable, it works outwards until the variable is found or we’ve reached the global scope and not found anything.
 
 * Dynamic Scoping:
    * Values of the variables depends on the call stack i.e the order they are called 
    * There is no such concept of dynamic scoping in javascript and most of the languages
    * Besh uses or perl and some other languages uses dynamic scoping concept 
*/
function foo() {
  var a = 1;
  function too() {
    //   It is commented as now the static comes into the play and the value assigned will be of parent's a variable
    // var a = 2;

    function boo() {
      //
      var a = 3;
      console.log("Internal Level : ", a);
    }

    boo();
    console.log("Internal Level : ", a);
  }
  too();
  console.log("Internal Level : ", a);
}
foo();
