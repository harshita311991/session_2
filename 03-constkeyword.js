// //const a=10

// const arr=[10,20,30]    //constant reference
// arr.push(50)
// console.log(arr)
// // a++
// // console.log(a)

// arr[1]=60;
// console.log(arr)
// // arr=10
// // console.log(arr)

const arr=Object.freeze([10,20,30])
arr.push(50)
console.log(arr)