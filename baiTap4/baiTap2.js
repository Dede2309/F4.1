const FE=[
    {
        id:Number(1),
      Name:"HTML",
      Complete:false
    },
    {
        id:Number(2),
        Name:"CSS",
        Complete:true
    },
    {
        id:Number(3),
        Name:"Basic of JS",
        Complete:false
      },
      {
        id:Number(4),
        Name:"NPM",
        Complete:false
      },
      {
        id:Number(5),
        Name:"Git",
        Complete:false
      },
];
let text = prompt("Enter your command(N/D/U/C)")
let position;
switch(text){
    case "N":
        let name = prompt("Enter Name");
        let complete = prompt("Enter Complete");

        let newObj={
            Name:name,
            Complete:complete
        };
        FE.push(newObj);
        console.log(FE);
        break;
    case "U":
         position = Number(prompt("Enter position"));
        for(let i=0;i<FE.length;i++){
            if(FE[i].id === position){
                FE[i].Name = prompt("Enter new name");
                FE[i].Complete = prompt("Enter new complete");
                console.log(FE[i]);
                break;
            }
            else{
                console.log("id not found");
            }
        }
    case "D":
         position = Number(prompt("Enter position"));
        for(let i=0;i<FE.length;i++){
            if(FE[i].id === position){
                FE.splice(FE[i]);
                break;
            }
            console.log(FE[i]);
        }            
    case "C":
        for(let i in FE){
            console.log(FE[i]);
        }

}