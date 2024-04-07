/* 35. Animals:
Think of at least three different animals that have
a common characteristic. Store the names
of these animals in a list, and then use a for loop to print
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
out the name of each animal.
• Add a line at the end of your program stating what these animals have in common. You could print
a sentence such as Any of these animals would make a great pet!*/
var animalName = ["cow", "goat", "camel", "sheep"];
//for of loop 
for (var _i = 0, animalName_1 = animalName; _i < animalName_1.length; _i++) {
    var i = animalName_1[_i];
    console.log(i);
}
// for write a statement
for (var _a = 0, animalName_2 = animalName; _a < animalName_2.length; _a++) {
    var a = animalName_2[_a];
    console.log("".concat(a, " is a domestic animals \n"));
}
console.log(" all of these animals  ".concat(animalName[0], ",").concat(animalName[1], ",").concat(animalName[2], ", and ").concat(animalName[3], "\n are pets, and there meat is halla."));
