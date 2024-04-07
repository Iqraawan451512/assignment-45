/*30. Hello Admin:
Make an array of five or more usernames,
 including the name 'admin'. Imagine you are writing
 code that will print a greeting to each user after they
 print a greeting to each user:
log in to a website. Loop through the array, and
• If the username is 'admin', print a special greeting,
 such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric,
 thank you for logging in again.*/
var statement = ["sara", "arsalan", "admin", "iqra", "danish"];
for (var i = 0; i < statement.length; i++) {
    if (statement[i] == "admin") {
        console.log("hello ".concat(statement[i], " ,would you like to see a status report?\n"));
    }
    else {
        console.log("hello ".concat(statement[i], ",thank you for logging in again"));
    }
}
