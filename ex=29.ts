/*29. Favorite Fruit: 
Make an array of your favorite fruits, and then 
write a series of independent if statements that 
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain 
kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement,
such as You really like bananas!
 */
 /*let favorite_fruits =["apple","grapes","mangoes","pineapple"];
//.includes is using for checkinh my given fruit from my array
  if (favorite_fruits.includes("water mellon")){
    console.log( `would you like to eat watermellon`);
} else if (favorite_fruits .includes ("oranges")) {
    console.log(`would you like this oranges`);
}
else {
    console.log(`sorry ! your favorite fruits in not here`);
}*/
let myFruits :string[] =["apple" ,"orange" ,"watermelon"];
if(myFruits.includes("apple")){
    console.log("apple");

}
if(myFruits.includes("orange")){
    console.log("orange");

}
if(myFruits.includes("watermelon")){
    console.log("watermelon");

}