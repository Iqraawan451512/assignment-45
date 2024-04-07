/*13. Your Own Array:
Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list
that stores several examples. Use your list to
 print a series of statements about these items, such as
  “I would like to own a Honda motorcycle.”*/
let transportation = ["car", "helocopter", "aeroplane", "train"];
//for store several time example we are using "for loop"
//i mean index statt with o and will continue less then
//equall to 3 and every time i will add an other number
//mean element
for (let i = 0; i <= 3; i++) {
    console.log(`i would like to own a ${transportation[i]}`);
}
export {};
