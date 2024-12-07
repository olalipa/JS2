function calculateBmi (weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight"
    }
    if (bmi <= 25.0) {
        return "Normal"
    }
    if (bmi <= 30.0) {
        return "Overweight"
    }
    else return "Obese"
}
console.log(calculateBmi (58, 1.7))