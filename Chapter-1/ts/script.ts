/**
 * Lexical scope means compiler scope
 * or simply when you write code and then it is compiled
 * Decisions of how the sopes will occur are made at that point
 * The compiler decides the value of a variable based
 * */
function foo() {
    var a = 10;
    function boo() {
        console.log("Value of a is: ", a);
    }
    boo();
}
foo();
