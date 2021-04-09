export {}
//inline annotation
interface Point{ //name of interface use pascal naming convention
    x: number,
    y?: number
}
let drawPoint =(point:Point)=>{
    return(
        console.log(point)
    );
}
