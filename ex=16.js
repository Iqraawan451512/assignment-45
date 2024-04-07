/*
16. More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
console.log(`hey! guyes i found a bigger dinner table in a good venue so i am invitting some more friends`);
let invitation = ["iqra", "zara", "mahira", "sara"];
console.log('we have three more friend to invite for dinner\n');
// adding thee more friend
//unshift for add in starting
invitation.unshift("hira");
console.log(invitation);
//for addition in a middle we use splice method
invitation.splice(2, 0, "Danish");
console.log(invitation);
//for adding at the end we will use push method
invitation.push("Arsalan");
console.log(invitation);
for (let i = 0; i < invitation.length; i++) {
    console.log(`Hey !${invitation[i]} you are invited for dinner on sunday`);
}
export {};
