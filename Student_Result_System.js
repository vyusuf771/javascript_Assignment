
let studentName = "yusuf";
let rollNumber = 2053;
let mathMarks = 50;
let scienceMarks = 50;
let englishMarks = 50;

let Total_marks = mathMarks + scienceMarks + englishMarks;
let Percentage = Total_marks / 3;
let result=Percentage >=40;
if (result==true) {
    result="PASS"
    
}else{
    result="FAIL"
}
let  Grade;
console.log(result);

if (Percentage >= 40 && Percentage >= 59) {
     Grade="E";

} else if(Percentage >= 60 && Percentage >= 69) {
     Grade="D";
}else if(Percentage >= 70 && Percentage >= 79) {
     Grade="c";
}else if(Percentage >= 80 && Percentage >= 89) {
     Grade="B";
}else if(Percentage >= 90 && Percentage >= 100) {
     Grade="A";
}else{
     Grade="F";
    
}
console.log("-".repeat(20)  );
console.log();

console.log(`   STUDENT RESULT     \n`);
console.log("-".repeat(20)  );
console.log(`NAME      :${studentName}\nRoll NO   :${rollNumber}\n`);
console.log(`Math      :${mathMarks}\nScince    :${scienceMarks}\nEnglish   :${englishMarks}`);
console.log(`Total     :${Total_marks}\nPercentage:${Percentage}\nGrade     :${Grade}\nResult    :${result}\n`);
console.log("-".repeat(20)  );





