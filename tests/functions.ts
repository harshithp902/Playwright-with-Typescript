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