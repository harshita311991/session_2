let person={
    name:"john",
    age:30,
    city:"new york",
    address:{fno:123, street:"abc"},
    hobbies:["painting","music"],
    display:function(){
        console.log("this is object")
    }
}
//console.log(person)
// console.log(typeof(person))

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)


//destructure object
let {name,age,city,address}=person
console.log(name)
console.log(age)
console.log(city)
console.log(address)


let arr=[10,20,30]
// let a=arr[0]
// let b=arr[0]
// let c=arr[0]

//selective destructuring
let [a,,c]=arr
console.log(a)