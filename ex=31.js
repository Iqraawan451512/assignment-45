/* 31. No Users:
Add an if test to Exercise 30 to make sure the list
 of users is not empty.
 • If the list is empty, print the message We need to
 • Remove all of the usernames from your array,
 and make sure the correct message is printed.
find some users! */
var userName = ["sara", "arsalan", "admin", "iqra", "danish"];
//let userName2=[];
console;
if (userName.length > 0)
    for (var i = 0; i < userName.length; i++) {
        if (userName[i] == "admin") {
            console.log("\n hello ".concat(userName[i], ", would you like to see a status report \n"));
        }
        else {
            console.log("hello ".concat(userName[i], " , thank you for loggin"));
        }
    }
