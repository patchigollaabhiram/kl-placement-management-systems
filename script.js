
function checkEligibility() {
  let name = document.getElementById("name").value.trim();
  let roll = document.getElementById("roll").value.trim();
  let cgpaText = document.getElementById("cgpa").value;
  let result = document.getElementById("result");

  if (!name || !roll || cgpaText === "") {
    result.textContent = "Please fill all student details.";
    return;
  }

  let cgpa = Number(cgpaText);

  if (cgpa < 0 || cgpa > 10) {
    result.textContent = "Enter a valid CGPA from 0 to 10.";
  } else if (cgpa >= 7) {
    result.textContent = name + ", you meet the demo eligibility criteria!";
  } else {
    result.textContent = name + ", you do not meet the demo CGPA criteria.";
  }
}
