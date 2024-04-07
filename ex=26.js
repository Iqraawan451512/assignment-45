/*26. Alien Colors #2:
Choose a color for an alien as you did in Exercise 25,
• If the alien’s color is green, print a statement that
 the player just earned 5 points for shooting the alien.
 • If the alien’s color isn’t green, print a statement that
  the player just earned 10 points.
• Write one version of this program that runs the if
block and another that runs the else block.
 */
let alien_colore = "green";
if (alien_colore == "green") {
    console.log(`player just earned 5 points for shooting the alien \n`);
}
else {
    console.log(`player earned 10 points for shooting the alien`);
}
//requirnment 2
let alien_colore2 = "green";
if (alien_colore2 == "blue") {
    console.log(`player earned 5 points`);
}
else {
    console.log(`players earned 10 points for shooting the alien`);
}
export {};
