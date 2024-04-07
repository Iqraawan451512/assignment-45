/*
36. T-Shirt: 
Write a function called make_shirt() that accepts a size and 
the text of a message that should 
be printed on the shirt. The function should
 print a sentence summarizing the size of the shirt and the 
message printed on it. Call the function.
*/
 function mySize (size:Number , lable:string){
    //return is men jo bhe lekhen gy wo print ho ga
    return `my size is ${size} ,and it  ${lable} size`
 }
 let make_shirt = mySize(36 , "is a small size");
 console.log(make_shirt);
    // send method of this is arrow function
    let myfun = (size : number , lable : string)=>{
        return size + lable;
    }
    console.log(myfun (36," its is asmall size"));
