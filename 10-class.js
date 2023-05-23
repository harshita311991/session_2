// function Employee(name,age){
//     //data members
//     this.name=name
//     this.age=age

//     //member functions
//     this.showData=function(){
//         console.log(this.name,this.age);
//     }
// }

// var emp1=new Employee("harshita",30)
// emp1.showData()


class Employee {
    constructor(name, age) {
        //data members
        this.name = name;
        this.age = age;

        //member functions
        this.showData = function () {
            console.log(this.name, this.age);
        };
    }
}

var emp1=new Employee("harshita",30)
emp1.showData()