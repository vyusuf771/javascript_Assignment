let balance=2000;
let Deposit=1000;
let Withdraw =500;
let userinput="Withdraw"

switch (true) {
    case userinput=="checkBalance":
        console.log(`your balance is ${balance}.\nthank you for chosing us.`);
        
        
        break;
    case userinput=="Deposit":
        console.log(`your Deposit is ${Deposit}.\nyour balance is ${balance=balance+Deposit} \nthank you for chosing us.`);
        
        
        break;
    case userinput=="Withdraw":
        console.log(`your Withdraw  is ${Withdraw}.\nyour balance is ${balance=balance-Withdraw} \nthank you for chosing us.`);
        
        
        break;

    default:
        console.log("Display an error.");
        
        break;
}