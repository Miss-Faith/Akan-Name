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

let CC = parseInt(yearValue.slice(0,2));
let YY = parseInt(yearValue.slice(2,4));
let MM = function monthNumber() {
  if (monthValue === "January") {
    return 1;
  }
  else if (monthValue === "February") {
    return 2;
  }
  else if (monthValue === "March") {
    return 3;
  }
  else if (monthValue === "April") {
    return 4;
  }
  else if (monthValue === "May") {
    return 5;
  }
  else if (monthValue === "June") {
    return 6;
  }
  else if (monthValue === "July") {
    return 7;
  }
  else if (monthValue === "August") {
    return 8;
  }
  else if (monthValue === "September") {
    return 9;
  }
  else if (monthValue === "October") {
    return 10;
  }
  else if (monthValue === "November") {
    return 11;
  }
  else {
    return 12;
  }
}
monthNumber ();
let DD = dayValue;
