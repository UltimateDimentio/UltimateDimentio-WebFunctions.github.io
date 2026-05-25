const resultBox = document.getElementById("result");

function convertGrade() {
    resultBox.classList.add("activeResult");

    let mark = Number(document.getElementById("mark").value);

    let grade = "";
    if(isNaN(mark)){ grade = "Invalid input (Input is not a number)";}
    else if(mark > 100) {grade = "Invalid input (Input is greater than 100, cannot convert)"}
    else if(mark < 0) {grade = "Invalid input (Input is less than 0, cannot convert)"}
    else if(mark>=90){ grade = "A";}
    else if(mark >= 80) { grade = "B";}
    else if(mark>=70){grade ="C";}
    else if(mark>=60){grade ="D";}
    else if(mark>=50){grade ="E";}
    else{grade = "F";}

    // document.getElementById("result").innerHTML = "Grade: " + grade;

    let result = document.getElementById("result");

    if (isNaN(mark) || mark > 100 || mark < 0) {
        result.innerText = grade;
        result.style.color = "red";
        result.style.backgroundColor = "#ffbbbb";
        result.style.border = "2px solid red";
    }
    else if(grade === "F") {
        result.innerText = "Grade: " + grade;
        result.style.color = "#b21919";
        result.style.backgroundColor = "#fb9082";
        result.style.border = "";
    }
    
    else { 
        result.innerText = "Grade: " + grade;
        result.style.color = "green";
        result.style.backgroundColor = "#a2f0c2";
        result.style.border = "";
    }
}