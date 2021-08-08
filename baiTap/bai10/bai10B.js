let num = prompt('Enter the total number');
let chan=0;
let le=0;
if(num%2==0){
    chan=(num-num%2)/2;
    le=(num-num%2)/2;
    console.log(chan +' L');
    console.log(le +' H');
} else{
    chan = ((num-num%2)/2)+1;
    le = (num-num%2)/2;
    console.log(chan +' L');
    console.log(le +' H');
}