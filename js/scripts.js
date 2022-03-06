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
