
// let numbers=function(n){
    //     console.log(45+90);
    //     return n
    
// }
// console.log(numbers(77))

// for(let i=0;i<100;i++){
    //     console.log(i);
    
// }
let marks=-1;
switch (true) {
    case marks >=40 && marks <=49:
        console.log("F");       
        break;
    case marks >=50 && marks <=59:
        console.log("E");       
        break;
    case marks >=60 && marks <=69:
        console.log("D");       
        break;
    case marks >=70 && marks <=79:
        console.log("C");       
        break;
    case marks >=80 && marks <=89:
        console.log("B");       
        break;
    case marks >=90 && marks <=100:
        console.log("A");       
        break;
    case marks >=101 :
        console.log("Give number between 1 to 100");       
        break;

    default:
        console.log("value is negitive");
        
        break;
}