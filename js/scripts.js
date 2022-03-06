let daysofTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let yearValue = document.getElementById('year').value;
let monthValue = document.getElementById('month').value;
let dayValue = parseInt(document.getElementById('day').value;
let genderValue = document.getElementById("gender").value;

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

  let century = function calculateCentury() {
    let centruryValue = parseInt(yearValue.slice(0,2));
    if (centuryValue < 17) {
      let keyValue = Math.ceil((1700 - parseInt(yearValue))/400);
      let yearRevised = yearValue + (keyValue * 400);
      return Math.floor(yearRevised/100);
    }else if (centuryValue > 20) {
      let keyValue = Math.ceil((parseInt(yearValue) - 2000)/400);
      let yearRevised = yearValue - (keyValue * 400);
      return Math.floor(yearRevised/100);
    }else {
      parseInt(yearValue.slice(0,2));
    }
  }
  calculateCentury();

  let CC = function centuryKeyValue() {
    if (century = 17) {
      return 4;
    }else if (century = 18) {
      return 2;
    }else if (century = 19) {
      return 0;
    }else if (century = 20) {
      return 6;
    }
  }

let YY = parseInt(yearValue.slice(2,4));
//
let MM = function MonthKeyValue() {
  if (monthValue === "January") {
    return 1 - 1;
  }else if (monthValue === "February" && parseInt(yearValue) % 4 === 0 && parseInt(yearValue) % 100 !== 0) {
    return 4 - 1;
  }else if (monthValue === "February" && parseInt(yearValue) % 4 !== 0 ) {
    return 4;
  }else if (monthValue === "February" && parseInt(yearValue) % 100 === 0 ) {
    return 4;
  }else if (monthValue === "March") {
    return 4;
  }else if (monthValue === "April") {
    return 0;
  }else if (monthValue === "May") {
    return 2;
  }else if (monthValue === "June") {
    return 5;
  }else if (monthValue === "July") {
    return 0;
  }else if (monthValue === "August") {
    return 3;
  }else if (monthValue === "September") {
    return 6;
  }else if (monthValue === "October") {
    return 1;
  }else if (monthValue === "November") {
    return 4;
  }else {
    return 6;
  }
}
MonthKeyValue();

let dayOfTheWeek = (Math.floor(YY/4) + DD + MM + CC + YY) % 7;

function getAkanName () {
  if (genderValue === "male") {
    switch (dayOfTheWeek) {
      case 0:
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[0]}: your Akan name is " + maleAkanNames[0];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 1;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[1]}: your Akan name is " + maleAkanNames[1];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 2;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[2]}: your Akan name is " + maleAkanNames[2];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 3;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[3]}: your Akan name is " + maleAkanNames[3];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 4;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[4]}: your Akan name is " + maleAkanNames[4];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 5
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[5]}: your Akan name is " + maleAkanNames[5];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 6;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[6]}: your Akan name is " + maleAkanNames[6];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 7;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[7]}: your Akan name is " + maleAkanNames[7];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      default;
        alert("No Akan Name. Verify your inputs are correct.");
    }
  }else if (genderValue === "female") {
    switch (dayOfTheWeek) {
      case 0:
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[0]}: your Akan name is " + maleAkanNames[0];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 1;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[1]}: your Akan name is " + maleAkanNames[1];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 2;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[2]}: your Akan name is " + maleAkanNames[2];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 3;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[3]}: your Akan name is " + maleAkanNames[3];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 4;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[4]}: your Akan name is " + maleAkanNames[4];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 5
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[5]}: your Akan name is " + maleAkanNames[5];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 6;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[6]}: your Akan name is " + maleAkanNames[6];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      case 7;
        document.getElementById('result').textContent = "You were born on a ${daysofTheWeek[7]}: your Akan name is " + maleAkanNames[7];
        document.getElementById('displayname').textContent = "Your Akan name";
        break;
      default;
        alert("No Akan Name. Verify your inputs are correct.");
    }
  }
}
getAkanName ();
