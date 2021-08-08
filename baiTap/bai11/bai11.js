let weight = Number(prompt('Enter weight :'));
let height = Number(prompt('Enter height :'));
let BMI = weight/(height*height);
if (BMI < 16) {
    console.log('Thieu can nang');
} 
else if (BMI > 16 && BMI <= 18.5) {
    console.log('Thieu can');
}
else if (BMI > 18.5 && BMI < 25) {
    console.log('Binh thuong');
}
 else if (BMI > 25 && BMI <= 30) {
    console.log('thua can');
}
else {
    console.log('beo phi');
}