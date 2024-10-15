let join = document.getElementById("join");
let className = document.getElementById("className");
let subject = document.getElementById("subject");
let section = document.getElementById("section");

let className2 = "DLD";
let subject2 = "Digital Logic Design";
let section2 = "Solaris";

join.onclick = function () {
    if(className2 == className.value && subject2 == subject.value && section2 == section.value) {
        alert("Class Found!");

        let element = document.getElementById("joinClass");
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "block";
        }
    }
    else {
        alert("Class not Found!");
    }

}