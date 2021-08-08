let n =prompt('n = ');
let x =prompt('x = ');
while(x=>0 && x <= n){
    if(x<=(n/2)){
        console.log('x Lower half of n');
        break;
    } else {
        console.log('x High half of n');
        break;
    }
}
