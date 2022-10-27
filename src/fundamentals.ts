let sales: number = 123_456_789; 
let course: string = 'TypeScript';
let isPublished: boolean = true; 

let level;
//any type is possible just set it to any to avoid errors Or change Strict Any to FALSE in Config - but not recommended Defeating purpose 
function render(document: any) {
    console.log(document);
}

//Arrays 
// let numbers: number[] = [1,2,'3']; js example typescript below
let numbers: number[] = [1,2,3]; //also you can do let numbers: number[] = []; to make empty array 
//numbers.forEach(n => n.toExponential)----->>> easier to use intellisense 

//Tuple  fixed length array mainly used for pair of two values almost like using key value pairs
let user: [number, string] = [1, 'Leo']; 
user[0] = 11;
user[1]= 'Estrella'; 

//enums declared with Pascal 


enum Size {Small = 1, Medium, Large};
let mySize: Size.Medium;

console.log(mySize); 

// can use const to produce more optizmed ENUM code 
// enum Size {Small = 1, Medium, Large};
// let mySize: Size.Medium;

// console.log(mySize); 

//OBJECTS 
//using question mark makes having second property optional 
let employee: {id: number, name?: string} = {id:1, name:'leo'};
//sometimes you can make object properties READ ONLY using readonly (so we don't accidenTLY CHANGE LATER ON )
let employee2: {readonly id: number, name?: string} = {id:1, name:'leo'};

// anoter example from course letemployee: { id:number; name:string; retire: (date:Date) =>void} = {id:1,name:'Mosh',retire:(date:Date)=>{},};
