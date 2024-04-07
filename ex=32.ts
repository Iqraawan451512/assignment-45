/* 
32. Checking Usernames: 
Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available.
• Make sure your comparison is case insensitive.
 If 'John' has been used, 'JOHN' should not be accepted.*/


//reqirnment 1 
let current_users = ["zara", "sara", "iqra", "mairah", "irha", "danish"];
// requirnment 2
let new_users = ["ali", "nimrah", "fiza", "danish", "usrah", "iqra", "zamrah"];
// for casesensetive we are using for each and converting in lower case
new_users.forEach((new_user) => {
    //converting our variable into another variable 
  let new_userLower = new_user.toLowerCase();
  // .some is using for comparing boht variable and there ans will be bollen
  let user_nameTaken = current_users.some(
    (current_user) => current_user.toLowerCase() === new_userLower
  );
  if (user_nameTaken) {
    console.log(
      `${new_user},need to choose a new user name its alredy choosen \n`
    );
  } else {
    console.log(`${new_user} is the new number added`);
    //adding current users into new users
    current_users.push(new_user);
  }
});
