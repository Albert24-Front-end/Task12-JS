let button_add = document.getElementsByClassName("add")[0];
let button_delete = document.getElementsByClassName("delete")[0];

button_add.addEventListener("click", addStudent);
button_delete.addEventListener("click", deleteStudents);

let students = [];

function addStudent(){
    let studentName = document.getElementsByClassName("name")[0].value;
    let studentSurname = document.getElementsByClassName("surname")[0].value;
    let studentCourse = document.getElementsByClassName("course")[0].value;
    let studentStream = document.getElementsByClassName("stream")[0].value;
    let result = document.getElementsByClassName("result")[0];
    
    console.log(studentName, studentSurname, studentStream);

    if (studentName != "" &&
        studentSurname != "" &&
        studentCourse != "" &&
        studentStream != "") {
            let studentObject = {
                name: studentName,
                surname: studentSurname,
                course: studentCourse,
                stream: studentStream,
            }
        
            students.push(studentObject);
        
            console.log(students);   
    }
    else {
        alert("Пожалуйста, заполните все предлагаемые поля.");
    }

    result.innerHTML = '';

    let number = 1;

    for (let student of students) {
       
        result.innerHTML += `${number}. ${student.name}  ${student.surname}, курс ${student.course}, поток №${student.stream}<br>`;
        number +=1;
    };
}

function deleteStudents(){
    students = [ ];

    let result = document.getElementsByClassName("result")[0];
    result.innerHTML = '';

    console.log('Все студенты удалены:', students);
}