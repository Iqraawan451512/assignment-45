/*
34. Pizzas: 
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
the pizza. For each pizza you should have one line of output containing a simple statement like I like 
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
output should consist of three or more lines about the kinds of pizza, you like and then an additional 
sentence, such as I really love pizza!
*/
let pizza = ["pepperoni pizza", "BBQ pizza", "fajita pizza"];
for (let i = 0; i < pizza.length; i++) {
  console.log(` ${i} ${pizza[i]} \n`);
}
//requirnment 2 prints name and message
for (let i = 0; i < pizza.length; i++) {
  console.log(`i like to eat ${pizza[i]}`);
}
console.log(
  `i really like pizza. pizza is ultimate convenience food .its quick ,tasty and always satisfying.with its easy turnover time \n`
);