/*45. Cars:
Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an
 arbitrary number of keyword arguments. Call the function with the
  required information and two other name-value pairs, such as
  a color or an optional feature. Print the Object that’s returned
   to make sure all the information was stored correctly.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function ko bataya knkarna kiya hy
//recorded mean jo bhe string hy usy extend kr do
function carDetails(manufacturer, modelName, additionalInformation) {
    //now creating a variale 
    return __assign({ manufacturer: manufacturer, modelName: modelName }, additionalInformation);
}
//now calling the function
var newDetails = carDetails("honda", "civic", { color: "blue", year: "2023" });
console.log(newDetails);
console.log("\n \n\n\n\n  THE end");
