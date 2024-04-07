/*
3.Name Cases:
store a person'name in a variable , and then print
that person's name in lowercase,uppercase and titlecase
*/
/*lowercase*/
let personname1 = "iqra";
let newname = personname1.toLowerCase();
console.log(newname);
/*uppercase*/
let personname2 = "iqra";
let newname2 = personname2.toUpperCase();
console.log(newname2);
/*title case*/
let personname3 = "iqra";
let newname3 = personname3.charAt(0).toUpperCase();
let newname4 = personname.slice(1).toLocaleLowerCase();
let titlename = newname3 + newname4;
console.log(titlename);
export {};
