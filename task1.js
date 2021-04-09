"use strict";
exports.__esModule = true;
var msg = "Hello";
console.log(msg); //Hello
///////variable Declaration/////////
var a = 0; //if knew value will chng further //block-scope
var b = 10; //remain constant throughout  //block-scope //always inintilix=zed
///////Variable types///////
//basic type(booloean, number, string)
var bool = false;
var num = 0;
var str = "Typescripting";
//sub type(null, undefined)
var c = null;
var d = undefined;
var name = undefined;
//Array-type //declaration
var list1 = [0, 1, 2];
var list2 = [0, 1, 2];
//Tuple //array values of diffrent type
var p1 = ["Crownstack", 5];
//Enum type
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var e = Color.blue;
console.log(e); //0
//Any Type //unsure what will be the var value only then use "Any"//  not a best practise
var value = 10;
value = true;
value = 'Vishwas';
//Unknown type
var myVariable = 10;
console.log(myVariable.name.firstName);
myVariable(); //can be called as function
myVariable.toUpperCase();
///////Type inference///////
var z;
z = 10;
z = true;
var y = 10;
//////Union Types////// //use of pipeline chrater to integrate 2 types
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
///////Functions in typescript///////
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return (num1 + num2);
}
add(5, 10);
add(5); // if num2 is optional
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var p = {
    firstName: 'Crown',
    lastName: 'stack'
};
fullName(p);
///////Classes is typeScript//////
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good afternoon ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Mee');
console.log(emp1.employeeName); //Mee
emp1.greet(); //Good afternoon Mee
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
var Abc = /** @class */ (function () {
    function Abc() {
    }
    return Abc;
}());
//private //cant be accessed outside the class //cant be access in derived class
var Def = /** @class */ (function () {
    function Def() {
    }
    return Def;
}());
//protected //cant be accessed outside the class //cant be access
var Ghi = /** @class */ (function () {
    function Ghi() {
    }
    return Ghi;
}());
