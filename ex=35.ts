/* 35. Animals: 
Think of at least three different animals that have 
a common characteristic. Store the names 
of these animals in a list, and then use a for loop to print 
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
out the name of each animal.
• Add a line at the end of your program stating what these animals have in common. You could print 
a sentence such as Any of these animals would make a great pet!*/
 
let animalName = ["cow" ,"goat","camel" ,"sheep"];
//for of loop i is our own name
for(let i of animalName){
    console.log(i);
}
// for write a statement a is our own assumtion name
for( let a of animalName){
console.log(`${a} is a domestic animals \n`);
}
console.log(` all of these animals  ${animalName[0]},${animalName[1]},${animalName[2]}, and ${animalName[3]}
 are pets, and there meat is halla.`)


