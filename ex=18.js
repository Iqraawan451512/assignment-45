/*18. Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed*/
let cityNames = ["karachi", "islamabad", "lahore", "uk", "barsona"];
console.log(cityNames);
//slice is using for copy of arry
let copyOfArry = cityNames.slice();
console.log(copyOfArry);
//sort is use for alphabatecally arrangnment
let sortArry = copyOfArry.sort();
console.log(sortArry);
//show your array is still in a original position
console.log(cityNames);
//reverse array but dont change orignal thats why we will create a copy with the help of sort
let copyOfArry2 = cityNames.sort();
let reverseArry = copyOfArry2.reverse();
console.log(reverseArry);
//reverse th original array
let reverOfarray = cityNames.reverse();
console.log(reverOfarray);
//original array ko reverse kar ky dobara original form men la rahy hen
let reverseArry3 = reverOfarray.reverse();
console.log(reverseArry3);
export {};
