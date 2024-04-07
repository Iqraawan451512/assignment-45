/*42. Great Magicians: 
Start with a copy of your program from Exercise 41.
 Write a function called make_great() that modifies the array of
  magicians by adding the phrase the Great to each magician’s name
. Call show_magicians() to see that the list has actually been modified.*/

let magicianName=["Magnesium citrate","Magnesium citrate","Magnesium chloride"];
// shown great in a function we prints our name of element with sentance 
function show_magicians(Great:string){
    for(let items of magicianName){
        console.log(items,Great)
    }
 };
 show_magicians(` is the elements of magnesium `);

