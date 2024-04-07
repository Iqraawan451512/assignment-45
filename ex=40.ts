/*ex=40 album
Write a function called make_album() that builds an Object
 describing a music album. The function should take in an 
 artist name and an album title, and it should return a Object 
 these two pieces of information. Use the function to make three 
 dictionaries representing different containing 
 albums. Print each return value to show that Objects are
  storing the album information correctly.
  Add an optional parameter to make_album() that allows you 
  to store the number of tracks on an album. 
  If the calling line includes a value for the number of tracks
  , add that value to the album’s Object. Make 
  at least one new function call that includes the number of 
  tracks on an album.*/
  
  function myAlbum( artistName : string ,albumTitle :string ){
       return {artistName,albumTitle};
  }
  let album_1 = myAlbum("aliz zakfar" , "noor e jahan");
  let album_2 = myAlbum("atif aslam","dewangi");
  let album_3 = myAlbum("rahat fathe ali khan" ,"rah e muhabat");
console.log(album_1);
console.log(album_2);
console.log(album_3);

// for optional parameter

function myAlbum_2( artistName : string ,albumTitle :string , numberOfTracks? :number){
    return {artistName,albumTitle ,numberOfTracks};
}
let album_4 = myAlbum_2("\n aliz zakfar" , "noor e jahan",30);
let album_5 = myAlbum_2("atif aslam","dewangi" ,24);
let album_6 = myAlbum_2("rahat fathe ali khan" ,"rah e muhabat",25);
console.log(album_4);
console.log(album_5);
console.log(album_6);







