const product =[ 
    {
        id:1,
        Name:"Xiaomi portable charger 20000 mah",
        Brand:"Xiaomi",
        Price:428,
        Color:"White",
        Category:"Charger"
    },
    {
        id:2,
        Name:"VSmart Active 1",
        Brand:"VSmart",
        Price:5487,
        Color:"Black",
        Category:"Phone"

    },
    {
        id:3,
         Name:"IPhone X",
        Brand:"Apple",
        Price:21490,
        Color:"Gray",
        Category:"Phone"

    },
    {
        id:4,
        Name:"Samsung Galaxy A9",
        Brand:"Samsung",
        Price:8490,
        Color:"Blue",
        Category:"Phone"  
    }];
// for(let i=0; i <product.length;i++){
//     console.log(product[i]);
//     console.log("------------")
// }
// let idFind = Number(prompt("Enter id find"));
// let category = prompt("Enter category");
// for(let i =0;i<product.length;i++){
//    if(idFind === product[i].id){
//        console.log(product[i]);
//    } 
// if(category === product[i].Category){
//     console.log("-------");
//     console.log(product[i].Name);
//     console.log(product[i].Price);
// }
// }
//bai1.4
for(let i=0;i<product.length;i++){
    if(product[i].id==1){
        product[i].Providers = "Phukienzero Dientuccc";
 }else {
     product[i].Providers="Tgdd";
 };
}
// for(let i in product){
// console.log(product[i].Name);
// console.log(product[i].Price);
// console.log(product[i].Providers)
// console.log("--------");
// }
//bai1.5
let x = prompt("Enter providers");
for(let i in product){
    if(product[i].Providers == x){
        console.log(product[i]);
    }
}
