let data:number=100;
//data="thirty";//throws compile time error as we are trying to assign string value to number type variable   
// dont run this file using node datatypes.ts or tsx datatypes.ts dont work

//js is not type safety
console.log(data);

/* datatypes in typescript such as
data type = type of data we are storing in a variable

Type /Data type =number
Annotations= :number
Type inference based on assigned value it apply  the datatype without explicitly mentioning it
typeOf operator is used to find the datatype of a variable 
Primitive Data Types: number, string, boolean,null,undefined, any, union type,void

non-Primitive Data Types: objects, arrays,interfaces,function,collections */

let count:number=10;
let float:number=10.5;
let double:number=10.3532545345345;

console.log("all type of numbers",count,float,double);

//String type

/* 
singlequote, double quote, backtick are used to define string type in typescript    
*/ 

let firstName:string="Harshitha";
let lastName:string='Pondari';
let fullName:string=`${firstName} ${lastName}`;
console.log("Full Name:",fullName);

//boolean
let isValid:boolean=true;
let isCompleted:boolean=false;
console.log("isValid:",isValid,"isCompleted:",isCompleted);

//Null and Undefined
let data1:null=null;
let data2:undefined=undefined;
console.log("data1:",data1,"data2:",data2);

/* undefined = value is missing because it was never assigned.
null = value is intentionally absent, usually assigned by a programmer, API, database, or library.
TypeScript */

let data3:number;
//console.log("data3:",data3);//undefined because we have not assigned any value to it

//Any type and unknown type
let data4:any=10;
data4="Hello";
data4=true;
console.log("data4:",data4);
/*any = "skip TypeScript checks"
unknown = "check first, then use" */
/*  
const response: unknown = await fetchData();

Before using it:

if (typeof response === "object" && response !== null) {
console.log(response);
}
*/

//union type
let data5:number|string=10;
data5="Hello";
console.log("data5:",data5);

//void type
function display():void{
    console.log("Hello, World!");
}

display();