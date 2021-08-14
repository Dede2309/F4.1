// let x = prompt("Enter number")
// let y = x.split(',').map(Number);
// let z =[];
// for ( let i in y){
//     if(y[i] % 2 !=0){
//         z.push(y[i]);
//     }
// }
// console.log(z);

let z = prompt("Enter name");
let p = z.split(',');
for(let i in p){
    console.log("<"+p[i]+">");
}