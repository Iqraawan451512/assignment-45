/*24. More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array*/
//camparision between strings
let num1 = 1234;
let num2 = 1234;
let num3 = num1 == num2;
console.log(num3);
//1= equality and inequality with strings
let myName = "Iqra";
console.log(myName == "Iqra");
//lowecase function
let myName1 = "Iqra ";
console.log(myName1 == "iqra");
//numaric test
let numbers = 10;
console.log(numbers == 10); //true
console.log(numbers > 10); //false
console.log(numbers < 10); //false
console.log(numbers <= 10); //true
console.log(numbers >= 10); //true
//and and or operator
let num4 = 10;
let num5 = 6;
console.log(num4 > 5 && num5 > 5);
//or operator
console.log(num4 > 12 || num5 > 3);
// for arrays test
let myArray = ["danish", 3, "ali", 23, "iqra"];
let myArray2 = "haniya";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myArray2));
export {};
