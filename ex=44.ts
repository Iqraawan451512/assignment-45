/*44. Sandwiches: 
Write a function that accepts an array of items a person wants on
 a sandwich. The function should have one parameter that collects
  as many items as the function call provides, and it should 
  print a summary of the sandwich that is being ordered. 
  Call the function three times, using a different number of 
  arguments each time.*/

  //...items becasue our reqirnment is ,parameter should be array
function sandwich( ...items: string[]){
    return `i want sandwish like : ${items}`;console.log(collection1);

} ;
//now calling functions
let collection1=sandwich("cheese","chichen","vegitable .");
let collection2 =sandwich("lettuce ","agg" ,"mayo garlic .");
let collection3 =sandwich("chicken mayo" ,"chicken vegitable .");
console.log(collection1);
console.log(collection2);
console.log(collection3);



