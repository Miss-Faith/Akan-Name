let daysofTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let yearValue = document.getElementById('year').value;
let monthValue = document.getElementById('month').value;
let dayValue = parseInt(document.getElementById('day').value);

function dayLimit() {
  let maxday = document.getElementById("day");
  if (monthValue === "February" && parseInt(yearValue) % 4 === 0) {
    maxday.max = 29;
  }else if (monthValue === "February" && parseInt(yearValue) % 4 !== 0) {
    maxday.max = 28;
  }else if (monthValue === "January" || monthValue === "March" || monthValue === "May" || monthValue === "July" || monthValue === "August" || monthValue === "October" || monthValue === "December") {
    maxday.max = 31;
  }else {
    maxday.max = 30;
  }
}
dayLimit();
