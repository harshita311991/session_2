//3 types of functions
//1. named function

function sayhello(){
    console.log("hello")
}
//2. Anonymous function
 let myFun =function(){
    console.log("harshita")
 }

 let sum= function(x,y){
    return x+y
 }

 // 3. Arrow function in ES6
 let sum1= (x,y)=> x+y
 let sum2= x=> x*x
 console.log(sum2(10))


 let msg= ()=> console.log("hello")
 msg()




 let arr=[10,20,30,40,50]
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

//callback: when a function is passed as an argument
//for each is used to iterate over the array
//arr.forEach((i)=>console.log(i)) 

// let newarr= arr.forEach((i)=>console.log(i*i)) 
// console.log(newarr)


// let newarr= arr.map((i)=>(i*i)) 
// console.log(newarr)

arr1=["manish",20,"harshita", [20,30],{x:10,y:20},function(){console.log("hello")}]
// let newarr= arr1.map((i)=>("hi " +i)) 
// console.log(newarr)
arr1.forEach((i)=>console.log(i)) 
console.log(tyeof(arr1))


//arr1[arr1.length-1]();
