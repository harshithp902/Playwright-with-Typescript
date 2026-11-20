/* While loop
while(condition){
statement(s)
increment/decrement operation
}
finite loop , infiite loop  */

let i:number=0;
while(i<=5){
    console.log("while loop:",i);
    i++;
}
/* Do-while loop */
do{

    console.log(i);
    i++;
}while(i<=8);

/* For loop */
for(let j:number=0; j<=5; j++){
    console.log("for loop:",j);
}

let j:number;
for(j=0; j<=5; j++);
console.log(j);//6

//jump statement break, continue, return

