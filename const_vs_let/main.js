//The two javascript variables let and const are used for different purposes

//let can be used to assign values to a named variable and replacees "var".
//let can be changed/reassigned later in terms of functions and the values it holds.

let area = 12
let name = "Dave"

//const can also be used to assign values to a named variable but the value in it cannot be altered/reassigned later.

const perimeter = 40
const tree = "birch"

// both let and const are block scoped.
// In practice so far, I have seen let used in for loops, where you would expect values to change.  
// const on the other hand, I have seen used to store a final value of a function or to initialize a
// function with an algorithm.

const add = a + b
