/*
36. T-Shirt:
Write a function called make_shirt() that accepts a size and
the text of a message that should
be printed on the shirt. The function should
 print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.
*/
function mySize(size, lable) {
    //return is men jo bhe lekhen gy wo print ho ga
    return "my size is ".concat(size, " ,and it  ").concat(lable, " size");
}
var make_shirt = mySize(36, "is a small size");
console.log(make_shirt);
// send method of this is arrow function
var myfun = function (size, lable) {
    return size + lable;
};
console.log(myfun(36, " its is asmall size"));
