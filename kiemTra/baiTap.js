// let str_input = prompt("Input String: ")
// let newString = str_input.split(" ")
// let lengthNewString = newString.length;
// let newString1 = str_input.split(",");
// let newRs = [...new Set(newString1)];
// let rs = " ";
// let text = /[A-Z]/g;
let dateString = "05/11/1999";

// let employee = [
//     {
//      ten:"A",
//      tuoi:Number(15),
//      mucluong:Number(2),
//      chucvu:"A"
//     },
//     {
//         ten:"B",
//         tuoi:Number(16),
//         mucluong:Number(3),
//         chucvu:"B"
//        },{
//         ten:"C",
//         tuoi:Number(17),
//         mucluong:Number(3),
//         chucvu:"C"
//        },
// ];

//bai1
// for(let i=str_input.length-1;i>=0;i--){
//     rs +=str_input[i];
// }
// console.log(rs);

//bai2
// for(let i=0; i<=lengthNewString-1;i++){
//     if(newString[i][0].match(text)) {
//         rs += newString[i] + " ";
//     }
//     else if(!newString[i][0].match(text)){
//        rs+= newString[i].charAt(0).toUpperCase() + newString[i].slice(1) + " ";
//     }
// }    
// console.log(rs + "\n");

//bai3

// console.log(newRs);

//bai4

// let text = prompt("Enter your command(N/D/U/C)")
// let position;
// switch(text){
//     case "N":
//         let ten = prompt("Enter ten");
//         let tuoi = Number.prompt("Enter tuoi");
//         let mucluong =Number.prompt("Enter muc luong");
//         let chucvu = prompt("Enter chuc vu");
//         let newEmloyee={
//            ten:ten,
//            tuoi:tuoi,
//            mucluong:mucluong,
//            chucvu:chucvu
//         };
//         employee.push(newEmloyee);
//         console.log(employee);
//         break;
//     case "U":
//          position = prompt("Enter position");
//         for(let i=0;i<employee.length;i++){
//             if(employee[i].ten === position){
//                 employee[i].ten = prompt("Enter new ten");
//                 employee[i].tuoi = Number(prompt("Enter new tuoi"));
//                 employee[i].mucluong = Number(prompt("Enter new muc luong"));
//                 employee[i].chucvu = prompt("Enter new chuc vu");
//                 console.log(emloyee[i]);
//                 break;
//             }
//             else{
//                 console.log("name not found");
//             }
//         }
//     case "D":
//          position = prompt("Enter position");
//         for(let i=0;i<employee.length;i++){
//             if(employee[i].ten === position){
//                 employee.splice(employee[i]);
//                 break;
//             }
//             console.log(emloyee[i]);
//         }            
//     case "C":
//         for(let i in emloyee){
//             console.log(emloyee[i]);
//         }
// }

//bai5
function isValidDate(dateString)
{
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

console.log(isValidDate(dateString));