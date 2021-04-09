export {}
//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
let age : any = 25; //age as number
age = "Twenty-Five";  //age as string
age = true;  //age as boolean
age = {name:'Crownstack'}  //age as object

//when typescript code is changed to js then tere will be no errors.

//array of any-type
let mixed : any[] =[];

mixed.push(5);
mixed.push('marios');
mixed.push(false);

let suits: {name : any, age : any};
suits={name: 'harvey', age : 30};
