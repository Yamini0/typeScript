export {} //so,it can be used as module
let msg ="Hello"
console.log(msg); //Hello

///////variable Declaration/////////
let a = 0; //if knew value will chng further //block-scope
const b = 10; //remain constant throughout  //block-scope //always inintilix=zed

///////Variable types///////
//basic type(booloean, number, string)
let bool : boolean = false;
let num : number = 0;
let str : string = "Typescripting";

//sub type(null, undefined)
let c : null = null;
let d : undefined = undefined;

let name : string = undefined;

//Array-type //declaration
let list1 : number[] =[0,1,2];
let list2 : Array<number> =[0,1,2];

//Tuple //array values of diffrent type
let p1 :[string,number] = ["Crownstack",5];

//Enum type
enum Color {blue, yellow, orange}
let e: Color = Color.blue;
console.log(e); //0

//Any Type //unsure what will be the var value only then use "Any"//  not a best practise
let value: any = 10;
value = true;
value = 'Vishwas';

//Unknown type
let myVariable: any = 10;
console.log(myVariable.name.firstName);
myVariable(); //can be called as function
myVariable.toUpperCase();

///////Type inference///////
let z;
z = 10;
z = true;

let y = 10;

//////Union Types////// //use of pipeline chrater to integrate 2 types
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

///////Functions in typescript///////
function add(num1: number, num2: number = 10): number {
  return(
      num1 + num2
  )
}

add(5, 10);
add(5);// if num2 is optional
//to make parameter optional add "?" at last
//to make a parameter default pass the value


//////Interfaces////////
interface Person {
  firstName: string;
  lastName?: string; //optional
}

function fullName(person: Person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let p = {
  firstName: 'Crown',
  lastName: 'stack'
};
fullName(p);


///////Classes is typeScript//////
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log('Good afternoon ' + this.employeeName);
  }
}

let emp1 = new Employee('Mee');
console.log(emp1.employeeName); //Mee
emp1.greet();  //Good afternoon Mee

// class Manager extends Employee{
//   constructor(managerName: string) {
//     super(managerName);
//   }
//   delegateWork() {
//     console.log('Manager delgating tasks' + this.employeeName);
//   }
// }

// let m1 = new Manager('Bruce');
// m1.delegateWork();
// m1.greet();
// console.log(m1.employeeName);}

////////Access Modifiers////////
//set accessibility of property & method of class
//default value = "public"

//public //can be accessable by everyone
class Abc {
    public name;
}

//private //cant be accessed outside the class //cant be access in derived class
class Def {
    private name;
}

//protected //cant be accessed outside the class //cant be access
class Ghi {
    protected name;
}
