/*
37. Large Shirts: 
Modify the make_shirt() function so that shirts are
 large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium 
shirt with the default message, and a shirt of any 
size with a different message.
*/
function my_Size (size:number ,lable:string) {
    return size +lable

}
let new_size = my_Size(36, " its a medium size");
console.log(new_size)
  // modifying above funtion with  default message
  // in a default message we will write our message in the last 
  function my_size2 (lable: string, size :string = "large"){
    return size+lable;
  }
  let newSize = my_size2(" i love typescript");
  console.log(newSize);
  // requirnment 3 its a medium shirt with default message
   
  let my_function = (label :string , size: string ="medium")=>{
    return label+size;
  }
console.log(my_function("i love typescript  "));