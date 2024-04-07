/*
37. Large Shirts:
Modify the make_shirt() function so that shirts are
 large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any
size with a different message.
*/
function my_Size(size, lable) {
    return size + lable;
}
var new_size = my_Size(36, " its a medium size");
console.log(new_size);
// modifying above funtion with  default message
// in a default message we will write our message in the last 
function my_size2(lable, size) {
    if (size === void 0) { size = "large"; }
    return size + lable;
}
var newSize = my_size2(" i love typescript");
console.log(newSize);
// requirnment 3 its a medium shirt with default message
var my_function = function (label, size) {
    if (size === void 0) { size = "medium"; }
    return label + size;
};
console.log(my_function("i love typescript  "));
