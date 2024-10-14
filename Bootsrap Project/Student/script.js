let create = document.getElementById("create");
let classes = document.getElementById("classes");
let sub = document.getElementById("sub");
let sec = document.getElementById("sec");
let className = document.getElementById("className");
let subject = document.getElementById("subject");
let section = document.getElementById("section");

create.onclick = function() {
    className.textContent = classes.value;
    subject.textContent = sub.value;
    section.textContent = sec.value;

    let element = document.getElementById("wtf");
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "block";
    }
}