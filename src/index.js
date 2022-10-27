// Type Aliases | unions and intersections | type narrowing | nullable types | the unknown type | never type 
//Type aliases you can define a custom Type see below 
// type Employee = {
//     readonly id:number,
//     name:string,
//     retire: (date:Date) =>void
// }
// //Here I assign employye1 with TYPE Employee as Setup above 
// let employee1: Employee = {id:1,name:'Mosh',retire:(date:Date)=>{console.log(date)},};
// UNION TYPES give variable or function parameter more than 1 type  
function kgToLbs(weight) {
    //narrowing  
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
kgToLbs('10kg');
