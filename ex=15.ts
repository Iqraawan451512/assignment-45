/*15. Changing Guest List: 
You just heard that one of your guests can’t make
 the dinner, so you need to send out a new 
 set of invitations. You’ll have to think of
  someone else to invite.
  • Start with your program from Exercise 14.
   Add a print statement at the end of your program stating 
the name of the guest who can’t make it
• Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list

.*/

let invitation =["iqra","zara","mahira","sara"];
console.log(`for personal reasons ${invitation[2]} is not comming, it's ok we understand her situation `);
invitation[2]= "rida";
console.log(`New list of friends who are comming to my dinner is:`)

for(let i=0; i<invitation.length; i++){
    console.log(`${i}.${invitation[i]}`)
}


