/*19. Dinner Guests:
Working with one of the programs from
Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner.
*/
let invitation = ["iqra", "zara", "mahira", "sara"];
//we print a message how many friends i am inviting
console.log(`i am inviting ${invitation.length} friends for dinner which are following \n`);
// for loop is using to prints guests name with no
for (let i = 0; i < invitation.length; i++) {
    console.log(`${i + 1} ${invitation[i]}`);
}
export {};
