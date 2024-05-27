let setScoreBtn = document.getElementById("set");
let addStudentBtn = document.getElementById("add");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let select = document.getElementById("student");
let score = document.getElementById("score");
let selectOption = "";
let selectOptionCourse = ""
let studentResult = document.getElementById("studentResult")
function EventLestiner() {
  addStudentBtn.addEventListener("click", validationAddStudent);
  setScoreBtn.addEventListener("click", validationSetScore);
}
EventLestiner();
let students = [];
function validationAddStudent(e) {
  e.preventDefault();
  if (firstName.value.length > 0 && lastName.value.length > 0) {
    let st = new Student();
    students.push(st.addStudent(firstName.value, lastName.value));
  }
}
function validationSetScore() {
  if (
    selectOption !== "" &&
    score.value.length > 0 &&
    selectOptionCourse !=="" 
  ) {
    let sc = new Student();
    sc.setStudentScore(selectOption, selectOptionCourse, score.value);
  }
}

class Student {
  addStudent(firstName, lastName) {
    select.innerHTML += `<option value="${firstName} ${lastName}">${
      firstName + lastName
    }</option>`;
    return {
      firstName: firstName,
      lastName: lastName,
      rate: {
        js : "none",
        html :"none",
        css : "none"
      }
    };
  }
  setStudentScore(Name, course, score) {

    students.forEach((student) => {
        if(student.firstName + student.lastName == Name){
            switch (course){
                case "js":
                    student.rate.js = parseFloat(score)
                    break
                case "html" :
                    student.rate.html = parseFloat(score)
                    break
                case "css" : 
                    student.rate.css = parseFloat(score)
                    break
            }
            alert("course is add, continue")
            if (student.rate.html !== "none" && student.rate.css !== "none" && student.rate.js !== "none") {
                
                showStudents(`${student.firstName} ${student.lastName}`,student.rate.html,student.rate.css,student.rate.js)
            }
        };
    });
  }
  
}
function findSelectedOption(e) {
  selectOption = e.options[e.selectedIndex].text;
}
function findSelectedOptionCourse(e){
    selectOptionCourse = e.options[e.selectedIndex].text;

}
function showStudents(name ,html,css,js){
    let template = `
    <div class="item">
        <span >student Name :</span>
        <span class="studentName">${name}</span>
        <div class="courses">
            <div class="html">
                <span>html :</span>
                <span>${html}</span>
            </div>
            <div class="css">
                <span>css :</span>
                <span>${css}</span>
            
            </div>
            <div class="js">
                <span>js :</span>
                <span>${js}</span>

            </div>
        </div>
    </div>`
    studentResult.insertAdjacentHTML("afterbegin",template)
  }