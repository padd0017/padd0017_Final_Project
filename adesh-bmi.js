let BMI


function calculateBMI(weight, height){
BMI = weight / (height * height)
return BMI;
}

console.log(calculateBMI(90, 1.91));

function interpretBMI(bmi){
if(bmi < 18.5) {
    return "Underweight";
}
else if(bmi > 18.5 && bmi < 25) {
    return "Normal Weight"
}
else if(bmi > 25 && bmi < 30){
    return "Overweight";
}
else {
    return "Obese"
}
}

console.log(interpretBMI(BMI));