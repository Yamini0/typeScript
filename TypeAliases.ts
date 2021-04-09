export {}
// mainly reduce the line of code mainly incase of types parameters passed to d=function if functions are nested!
//aliases for types(if integrated)

type typeAliases = string | number;
type objwithName = {
    name: string,
    id: typeAliases
}

const logDetails = (id: typeAliases, item: String)=>{
    console.log(` ${item}have a id ${id}`);
}

const greet = (user:objwithName)=>{
    console.log(`${user.name}says ciao`);
}

const geetAgain = (user :objwithName)=>{
    console.log(`${user.name}says Good Afternoon`);
}