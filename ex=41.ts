/*41. Magicians: 
  Make an array of magician’s names. Pass the array to a function
  called show_magicians(), which prints the name of each magician
  in the array.
*/ 
let magicianName=["Magnesium citrate","Magnesium citrate","Magnesium chloride"];

function show_magicians(){

    for(let items of magicianName){
        console.log(items);
    }
};
show_magicians();
