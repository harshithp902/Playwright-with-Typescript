// Named function
function add(a: number, b: number): number {
  return a + b;
}
/* 4 types of functions that can be defined in TypeScript: named, anonymous, arrow, and generator functions. 
Rest parameters allow a function to accept an indefinite number of arguments as an array. */
// Named functions
/* noargs no return
no args return
args no return
args return
rest parameters */
function addNumbers(...numbers:number[]){
 for(let i = 0; i < numbers.length; i++){
   console.log(numbers[i])
 }
}

function addNumbersReturn(...numbers:(number|string)[]){
}
function addNumbersReturn1(numbers:number[],strings?:string){

} 
function addNumbersReturn2(price:number , defaultDiscount:number=0.50){

}
//named function with parameters-NROD-normal,rest,optional ,default parameters

//Anonymous function is a function that does not have a name. It can be assigned to a variable or passed as an argument to another function.
let mutliply =function(a:number,b:number){
    return a*b;
}