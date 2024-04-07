/*41. Magicians:
  Make an array of magician’s names. Pass the array to a function
  called show_magicians(), which prints the name of each magician
  in the array.
*/
var magicianName = ["Magnesium citrate", "Magnesium citrate", "Magnesium chloride"];
function show_magicians() {
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var items = magicianName_1[_i];
        console.log(items);
    }
}
;
show_magicians();
