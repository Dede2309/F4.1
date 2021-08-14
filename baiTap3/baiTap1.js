function growthMonth(num,month){
    let num1 =[];
    for(let i in num){
           num1.push(num[i] * 50 * month);
        }  
        return num1;
}
function findMin(num){
    let min = num[0];
        for(let i=0;i<=num.length;i++){
            if(min > num[i]){
                min = num[i];
            }
        }
        return min;
}
function findMax(num){
    let max = num[0];
        for(let i=0;i<=num.length;i++){
            if(max < num[i]){
                max = num[i];
            }
        }
        return max;
    }
function ConvertMaxTo8(num,max){
    let n = num.indexOf(max);
    num[n] = 8;
    num1 = num;
    return num1;
}

let num = prompt("Enter number").split(',').map(Number);
let num1 = num;
let num2;
let max2;
//bai1
// let sum=0;
// for(let i in num1){
//     sum += num1[i];
// }
// console.log(sum);
//bai 2
// console.log(findMin(num1));
//bai3
// let numFind = Number(prompt("Enter number find"))
// for(let i in num1){
//     if(num1[i] == numFind){
//         console.log("Number in: "+i);
//     }
// }
//bai4.1
// console.log("Here is my sheep size : \n" + num1);
//bai4.2
// console.log("My biggest sheep is: \n"+findMax(num1));
//bai4.3 
// max = findMax(num1);
// ConvertMaxTo8(num1,max);
//bai4.4
// let num2 = growthMonth(num1,1);
// let max2 = findMax(num2);
// ConvertMaxTo8(num2,max2);
//bai4.5
let month = prompt("Enter monther");
for(let i =0; i<month;i++){
    num2 = growthMonth(num1,i+1);
    // console.log("one month has,passed bla bla bla \n"+num2);
    max2 = findMax(num2);
    // console.log("After shearing, here is my flock \n" + ConvertMaxTo8(num2,max2));
  
}
//bai4.6
let num3 = num2;
sum =0;
for(let i in num3){
    sum += num3[i];
}
console.log("My flock has size in total: "+sum);
console.log("I would get " + sum + "* 2$ = " + sum*2 )