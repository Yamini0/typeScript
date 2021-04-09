export {}
//Enum defines set of named constants
//can't change the enum value
enum isConstants {
    pi = 3.14,
    e = 2.73
}
let radius:number = 5;
console.log("Circumference of the circle is" , 2 * isConstants.pi * radius);

enum isDirections {
    up=1,
    down,
    left,
    right
}//will start with 1 then 2 ..