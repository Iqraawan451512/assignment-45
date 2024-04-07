/*43. Unchanged Magicians:
Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new
  in a separate array. Call show_magicians() with each array
  to show that you have one array of the array and store it
original names and one array with the Great added to each
 magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianName = ["ali", "zarah", "sarah", "danish", "owais"];
//for the copy of arry
var magicianNameCopy = __spreadArray([], magicianName, true);
function show_magicians(great) {
    //CHANGE THAT YOU WANT TO ADD
    var changeMagician = "iqra";
    for (var _i = 0, magicianNameCopy_1 = magicianNameCopy; _i < magicianNameCopy_1.length; _i++) {
        var items = magicianNameCopy_1[_i];
        changeMagician += " ".concat(great, ", ").concat(items, " \n");
    }
    ;
    return changeMagician;
}
;
var mygreating = show_magicians(" magician");
var newArray = mygreating.split("\n");
console.log(newArray);
// for checkinh our orginal array
console.log(magicianName);
