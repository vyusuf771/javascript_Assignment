let unit=300;
switch (true) {
    case unit >=0 && unit <=100:
        console.log(`${unit*5}`);    
        break;
    case unit >=101 && unit <=200:
        console.log(`${unit * 7}`);
        break;
    case unit >=201:
        console.log(`${ unit * 10}`);
        
        break;
        

    default:
        console.log("error check input unit");
        
        break;
}