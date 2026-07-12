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
  clearInputs(array.value); 
  createAbout(array.name); 
  createInputs(array.value); 
  createEnter(); 
}

function clearInputs(array) {
  const inputs = document.getElementsByClassName("inputs"); 
  while (inputs[0].firstChild) {
    inputs[0].removeChild(inputs[0].firstChild); 
  }
}

function createAbout(arrName) { 
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
    abouts[0].innerHTML = "final grade calculator: calculates what final exam grade you'll to get your desired class grade!!"; 
  } else if (arrName == "courseGrade") {
    const abouts = document.getElementsByClassName("about");
    abouts[0].innerHTML = "course grade calculator: calculates your overall class grade after you've taken the final!!"; 
  }
}

function createInputs(array) {
  const inputs = document.getElementsByClassName("inputs");
  for (var i = 0; i < array.length; i++) { 
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input"); 

    const inputDivText = document.createElement("div"); 
    inputDivText.classList.add("inputText")
    inputDivText.innerHTML = "current grade: "; 

    const inputDivInput = document.createElement("input"); 
    inputDivInput.classList.add("inputParam");
    inputDivInput.type = "text";
    inputDivInput.id = array[i];
    inputDivInput.placeholder = array[i]; 

    inputDiv.appendChild(inputDivText); 
    inputDiv.appendChild(inputDivInput); 
    inputs[0].appendChild(inputDiv);
  }
}

function createEnter() {
  const enters = document.getElementsByClassName("enter");
  
  const enterInput = document.createElement("input");
  enterInput.classList.add("enterParam");
  enterInput.type = "submit";
  enterInput.id = "submit";
  enterInput.value = "submit";

  enters[0].appendChild(enterInput);
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