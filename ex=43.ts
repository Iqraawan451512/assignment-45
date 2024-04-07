/*43. Unchanged Magicians: 
Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new
  in a separate array. Call show_magicians() with each array 
  to show that you have one array of the array and store it 
original names and one array with the Great added to each
 magician’s name.*/
  
 let magicianName=["ali","zarah","sarah","danish","owais"];
 //for the copy of arry
 let magicianNameCopy = [...magicianName];
function show_magicians(great:string){
  //CHANGE THAT YOU WANT TO ADD
  let changeMagician ="iqra";
  for(let items of magicianNameCopy){
    changeMagician += ` ${great}, ${items} \n`;
  };
  return changeMagician;
};
let mygreating =show_magicians(` magician`)

let newArray =mygreating.split(`\n`);
console.log(newArray)
// for checkinh our orginal array
console.log(magicianName);
