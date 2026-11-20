// variables in TS ctrl+/
/* multiline comment *///shift +Alt+A

/* var, let ,const are the three types of variables in TS
specific to JS. var is function scoped, let and const are block scoped.
specific to TS, we can define the type of variable using :type but optional.
let x=10;
var studentName = "Harshitha";
let age:number=30*/


var age:number=40;
console.log(age);

// var vs let vs const
/*scope,declaration/value assignment, redeclaration, re initialization/reassignment,Hoisting
var - we dont use in modern JS, it is function scoped, can be redeclared and re initialized, hoisting is applicable
let - block scoped, can be re initialized but not redeclared, hoisting is applicable but not initialized
const - block scoped, cannot be redeclared or re initialized, hoisting is applicable but not initialized   let and const  throws initialization error if we try to access before declaration  
 */

/* function varScope(){
if(true){
var msg="Hello, World!";
}} 
varScope();


Declaration 
var x; let y, const z ; if we dont initialize them, they are undefined

Initialization
x=30 ,y=50, const z=40 const must e initialized at the time of declaration; 

Re declaration 

var x=30; let y=50; const z=40; 
var x=40 can be redeclared
let y=60 can be reinitialized not re declared
const z=50 cannot be redeclared or reinitialized
*/