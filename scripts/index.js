// F = (G - C*(1 - w)) / w 
// F = final grade, G = target grade, w = % weight as decimal, C = current grade 
function calcReqGrade (currGrade, targetGrade, finalWeight) {
  let w = finalWeight / 100; 
  let reqGrade = (targetGrade - (currGrade * (1 - w))) / w; 
  return reqGrade; 
} 

// G = F*w + C*(1 - w) 
// G = course grade, F = final grade, w = % weight as decimal, C = current grade 
function calcCourseGrade (currGrade, finalGrade, finalWeight) {
  let w = finalWeight / 100; 
  let courseGrade = (finalGrade * w) + (currGrade * (1 - w)); 
  return courseGrade; 
} 

function createScreen(array) {
  clearParams(array.value); 
  createAbout(array.name); 
  createParams(array.value); 
}

function clearParams(array) {
  const params = document.getElementsByClassName("params"); 
  while (params[0].firstChild) {
    params[0].removeChild(params[0].firstChild); 
  }
}

function createAbout(arrName) { //CREATE ABOUT TEXT 
  const options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    if (options[i].id == arrName) {
      options[i].classList.remove("inactive"); 
      options[i].classList.add("active"); 
    } else {
      options[i].classList.remove("active"); 
      options[i].classList.add("inactive"); 
    }
  } 
  if (arrName == "reqGrade") {
    const abouts = document.getElementsByClassName("about"); 
    abouts[0].innerHTML = "final grade calculator: calculates what final exam grade you'll to get your desired class grade"; 
  } else if (arrName == "courseGrade") {
    const abouts = document.getElementsByClassName("about");
    abouts[0].innerHTML = "course grade calculator: calculates your overall class grade after you've taken the final"; 
  }
}

function createParams(array) {
  const params = document.getElementsByClassName("params");
  for (var i = 0; i < array.length; i++) { //CREATE PARAM ELEMENTS 
    const input = document.createElement("input");
    input.classList.add("param");
    input.type = "text";
    input.id = array[i];
    input.placeholder = "enter " + array[i]; 
    params[0].appendChild(input); 
  }
  const enter = document.createElement("input"); 
  enter.classList.add("param"); 
  enter.type = "submit"; 
  enter.id = "submit"; 
  enter.value = "submit"; 
  params[0].appendChild(enter);
}

//START 
var reqGrade = {
  name: "reqGrade", 
  value: ["currGrade", "targetGrade", "finalWeight"]
}; 
var courseGrade = {
  name: "courseGrade", 
  value: ["currGrade", "finalGrade", "finalWeight"]
}; 

var def = reqGrade; 
createScreen(def); 

const reqGradeButton = document.getElementById("reqGrade"); 
reqGradeButton.addEventListener("click", () => {
  createScreen(reqGrade); 
}); 

const courseGradeButton = document.getElementById("courseGrade");
courseGradeButton.addEventListener("click", () => {
  createScreen(courseGrade);
}); 