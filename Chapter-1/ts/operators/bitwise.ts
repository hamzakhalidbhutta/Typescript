/* 
    * Bitwise operators in TypeScript accept values of all types. 
    * The operator treats each value in the expression as a sequence of 32 bits and returns a number
            like,     ...   64 32 16  8 4 2 1
                      ...   0   0  1  1 0 1 0 => in 32 bits binary

    * &     AND Returns a result with a 1 in each position that both inputs have a 1

    * |     OR Returns a result with a 1 in each position where either input has a 1

    * ^     XOR Returns a result with a 1 in each position where exactly one input has a 1

    * <<    Left Shift Bits in the left-hand argument are moved to the left by the number of bits specified in the right-hand argument
               Bits moved off the left side are discarded and zeroes are added on the right side

    * >>     Right Shift Bits in the left-hand argument are moved to the right by the number of bits specified in the right-hand argument
               Bits moved off the right side are discarded and digits matching the left most bit are added on the left side

    * >>>   Zero-fill Right Shift Bits in the left-hand argument are moved to the right by the number of bits specified in the right-hand argument
               Bits moved off the right side are discarded and zeroes are added on the left side
    
    * ~     NOT Accepts a single argument and inverts each bit
*/

let a: number, b:number

a = 2
b = 2
// >> Left shift bits operator
// 2 => ...00010 will be ...00010__ => 8
// or we can say that a * 2^2 => 2 * 2^2 => 2 * 4 => 8 
a = a << b
console.log(`Left shifted Bits ${a}`)
 
// >> Right shift bits operator
// 8 => ...01000 will be __...0010 => 2
// or simply we can say that a/2^2 => 8/2^2 => 8/4 => 2
a = a >> b
console.log(`Right shifted Bits ${a}`)

