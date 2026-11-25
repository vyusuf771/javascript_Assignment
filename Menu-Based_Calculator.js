let num1 =5;
let num2 =5;
let opt ="-";
switch (true) {
  case opt == "+":
    console.log(`${num1 + num2}`);
    break;
  case opt == "-":
    console.log(`${num1 - num2}`);
    break;
  case opt == "*":
    console.log(`${num1 * num2}`);
    break;
  case opt == "/":
    console.log(num2 !== 0 ? `${num1 / num2}` : "Cannot divide by zero");
    break;
  case opt == "%":
    console.log(`${num1 % num2}`);
    break;
  case opt == "**":
    console.log(`${num1 ** num2}`);
    break;
  default:
    console.log("Invalid operator");
    break;
}
