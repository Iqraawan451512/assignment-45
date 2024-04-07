/*42. Great Magicians:
Start with a copy of your program from Exercise 41.
 Write a function called make_great() that modifies the array of
  magicians by adding the phrase the Great to each magician’s name
. Call show_magicians() to see that the list has actually been modified.*/
var magicianName = ["Magnesium citrate", "Magnesium citrate", "Magnesium chloride"];
function show_magicians(Great) {
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var items = magicianName_1[_i];
        console.log(items, Great);
    }
}
;
show_magicians(" is the elements ofmagnesium ");
