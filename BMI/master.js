function calculate() {
  let Weight = parseInt(document.getElementsByTagName("input")[0].value);
  // alert(Weight);
  let Height = parseInt(document.getElementsByTagName("input")[1].value);
  // alert(Height);
  let bmi = ((Weight / (Height * Height)) * 10000).toFixed(2);
  // alert(bmi);
  let _result = document.getElementById("result");
  if (bmi < 18.5) {
    _result.innerHTML = bmi + "  Underweight ";
  } else if (bmi < 24.9) {
    _result.innerHTML = bmi + " Normal";
  } else if (bmi < 29.9) {
    _result.innerHTML = bmi + " Overweight ";
  } else if (bmi > 35) {
    _result.innerHTML = bmi + " Obesity";
  } else {
    _resulte.innerHTML = "Please enter a valid weight and height!";
  }
}
