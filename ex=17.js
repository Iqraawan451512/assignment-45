/*17. Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.
*/
const invitation = ["iqra", "danish", "zara", "mahira", "sara", "arsalan"];
console.log(" sorry table is not availabe so i can just invite two person ");
//for deleting element we will use pop method but we will store it in variable because
//its our requirnment to send them message
let friend1 = invitation.pop();
console.log(`sorry Mr.${friend1} your invitation is canclled .now you are not invited`);
let friend2 = invitation.pop();
console.log(`sorry! Miss ${friend2} your invitation is canclled .Now your not invited`);
let friend3 = invitation.pop();
console.log(`sorry! MISS ${friend3} Your invatation in cancalled .Now you are not invited`);
let friend4 = invitation.pop();
console.log(`sorry! MISS ${friend4} Your invatation in cancalled .Now you are not invited`);
//using for loop to print same message for last two guests
for (let i = 0; i < invitation.length; i++) {
    console.log(`${invitation[i]} you are  still invited`);
}
// as per last requrnment to show empty array 
invitation.pop();
invitation.pop();
console.log(invitation);
export {};
