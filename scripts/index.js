// F = (G - C*(1 - w)) / w 
// F = final grade, G = target grade, w = % weight as decimal, C = current grade 
function calcReqFinalGrade (currGrade, targetGrade, finalWeight) {
  let w = finalWeight / 100; 
  let reqFinalGrade = (targetGrade - (currGrade * (1 - w))) / w; 
  return reqFinalGrade; 
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

function createAbout(arrName) {
  if (arrName == "finalGrade") {
    const abouts = document.getElementsByClassName("about"); 
    abouts[0].innerHTML = "final grade calculator!!"
  } else if (arrName == "courseGrade") {
    const abouts = document.getElementsByClassName("about");
    abouts[0].innerHTML = "course grade calculator!!"
  }
}

function createParams(array) {
  for (var i = 0; i < array.length; i++) {
    const element = document.createElement("input");
    element.classList.add("param");
    element.type = "text";
    element.id = array[i];
    element.name = array[i]; 
    element.placeholder = "enter " + array[i]; 

    element.style.height = "5vh";
    element.style.width = "20vw";

    const params = document.getElementsByClassName("params");
    params[0].appendChild(element); 
  }
}

//START 
var finalGrade = {
  name: "finalGrade", 
  value: ["currGrade", "targetGrade", "finalWeight"]
}; 
var courseGrade = {
  name: "courseGrade", 
  value: ["currGrade", "finalGrade", "finalWeight"]
}; 

createScreen(finalGrade); 

const finalGradeButton = document.getElementById("reqGrade"); 
finalGradeButton.addEventListener("click", () => {
  createScreen(finalGrade); 
}); 

const courseGradeButton = document.getElementById("courseGrade");
courseGradeButton.addEventListener("click", () => {
  createScreen(courseGrade);
}); 