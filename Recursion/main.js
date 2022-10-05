// Recursion is when a function calls itself until some condition(s) stops it.
//A function that calls itself is a recursive function.
//The condition that stops the recursion is called the base case.
//Without the base case (stopping condition), the function runs forever(as an infinite loop)
//Recursion operates similar to the for and while loops (i.e. these loops need a condition to stop the looping process and avoid an infinite loop)

//Examples of Recursion
//1. Print out the range of two numbers
function range(a, b) {
  if (a > b) {
    console.log("");
  } else {
    console.log(a);
    range(a + 1, b); //This line is the recursive function
  }
}
range(2, 10);
console.log("Range of two numbers execution complete.........................");

//2. Palindrome Checker
function palindromeString(str) {
  if (str.length === 1) {
    return true;
  } else {
    if (str.charAt(0) != str.charAt(str.length - 1)) {
      return false;
    } else {
      return palindromeString(str.substring(1, str.length - 1));
    }
  }
}

console.log(palindromeString("racecar"));

console.log(
  "Palindrome checker execution complete.................................."
);

//Print the sum of numbers in an array
function som(arr) {
  let a = arr;
  if (a.length < 1) {
    return 0;
  }
  if (a.length == 1) {
    return a[0];
  }

  a[1] = a[0] + a[1];
  a.shift();
  return som(a);
}
console.log(som([3, 2, 6]));
console.log("Sum of numbers execution complete.......................");

//4. Factorial of a number
function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(6));
console.log("Factorial of the given number execution complete...........");

//The above examples are few of the many problems that can be solved with recursion.
