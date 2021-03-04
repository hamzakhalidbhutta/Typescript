/**
 * Lexical scope means compiler scope
 * or simply when you write code and then it is compiled
 * Decisions of how the sopes will occur are made at that point
 * The compiler decides the value of a variable based in the local scope and if it cant find the value there
 * it will go to the parent for checking if the variable is defined there but not to the child
 * */
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
