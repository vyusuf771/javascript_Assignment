let productName="buger";
let quenty=2;


switch (true) {
    case productName=="buger":
        console.log(`buger ${quenty}*150 = ${quenty*150}`);
        
        
        break;
    case productName=="pizza":
        console.log(`pizza ${quenty}*250 = ${quenty*250}`);
        
        
        break;
    case productName=="pasta":
        console.log(`pasta ${quenty}*180 = ${quenty*180}`);
        
        
        break;
    case productName=="sandwich":
        console.log(`sandwich ${quenty}*120 = ${quenty*120}`);
        
        
        break;

    default:
        console.log("not in the menu");
        
        break;
}