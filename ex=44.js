/*44. Sandwiches:
Write a function that accepts an array of items a person wants on
 a sandwich. The function should have one parameter that collects
  as many items as the function call provides, and it should
  print a summary of the sandwich that is being ordered.
  Call the function three times, using a different number of
  arguments each time.*/
//...items becasue our reqirnment is ,parameter should be array
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "i want sandwish like : ".concat(items);
    console.log(collection1);
}
;
//now calling functions
var collection1 = sandwich("cheese", "chichen", "vegitable .");
var collection2 = sandwich("lettuce ", "agg", "mayo garlic .");
var collection3 = sandwich("chicken mayo", "chicken vegitable .");
console.log(collection1);
console.log(collection2);
console.log(collection3);
