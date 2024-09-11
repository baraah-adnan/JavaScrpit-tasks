// task One part one  Q1
var fname = "barrah";
var lname = "jamous";
console.log(fname);
console.log(lname);
// task One part one Q2
var name = "baraah";
var name = "bebe";
console.log(name);
 let age = 21;
 //let age = 21.5;
const country = "syria";
// const country = "jordan";
let num = "123";
//convert string to number
num = parseInt(num);
num = parseFloat(num);
console.log(num, typeof num);
//covert number to string 
//1.
num = num.toString();
//2.
num = String(num);
console.log(num, typeof num);




// task one part two Q2

let mark = prompt("enter your mark please:");

if (mark < 50) {
document.write("fall");
}else if (mark<=59) {
    document.write("D");
}else if ( mark<=69) {
    document.write( "C");
}else if ( mark<=79) {
    document.write( "B");
} else if ( mark<=89) {
    document.write("A");
} else if (mark<=100) {
    document.write("A+");
} else {
document.write("error");
}

// task one part two Q4
let x = prompt("enter X:");
let y = prompt("enter Y:");
if (x > y) {
    alert("Hello word");
    console.log("Hello word");
}
else {
    alert("GOODbye");
    console.log("GOODbye");
}