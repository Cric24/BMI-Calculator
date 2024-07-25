function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiValue = bmi.toFixed(2);

    document.getElementById('bmi-value').innerText = bmiValue;
    let status = '';
    let tips = '';

    if (bmi < 18.5) {
        status = 'Underweight';
        tips = 'Consider a balanced diet with more calories and consult with a healthcare provider for personalized advice.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
        tips = 'Maintain your weight by continuing a balanced diet and regular physical activity.';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        tips = 'Incorporate regular physical activity and healthy eating habits. Consult with a healthcare provider for personalized advice.';
    } else {
        status = 'Obesity';
        tips = 'Seek guidance from a healthcare provider for a tailored weight management plan.';
    }

    document.getElementById('bmi-status').innerText = status;
    document.getElementById('bmi-tips').innerText = tips;
}

function resetForm() {
    document.getElementById('bmi-form').reset();
    document.getElementById('bmi-value').innerText = '';
    document.getElementById('bmi-status').innerText = '';
    document.getElementById('bmi-tips').innerText = '';
}
