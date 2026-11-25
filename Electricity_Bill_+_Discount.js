let unit =200;

if(unit>=0 && unit<=100){
    console.log(`unit ${unit} = ${unit*5}`);
    
}else if(unit>=101 && unit<=199){
    console.log(`unit ${unit} = ${unit*7}`);
    
}else{
    console.log(`unit ${unit} = ${unit*10} you got 10% discount ${(unit*10)*0.9}`);
    
}