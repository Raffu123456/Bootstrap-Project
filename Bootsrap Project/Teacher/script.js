let create = document.getElementById("create");
let classes = document.getElementById("classes");
let sub = document.getElementById("sub");
let sec = document.getElementById("sec");
let section = document.getElementById("section");
let subject = document.getElementById("subject");
let abbre = document.getElementById("abbre");

let classSub = document.getElementById("classSub");
let content2 = document.getElementById("content2");
let file2 = document.getElementById("file2");
let date2 = document.getElementById("date2");
let date = document.getElementById("date");
let time = document.getElementById("time");
let content = document.getElementById("content");
let file = document.getElementById("file");


create.onclick = function() {
     classSub.textContent = classes.value;
     content.textContent = content2.value;
     file.textContent = file2.value;
     date.textContent = date2.value;


     abbre.textContent = classes.value;
     subject.textContent = sub.value;
     section.textContent = sec.value;


    let element = document.getElementById("createSub");
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "block";
    }

    alert(`${classes.value} Class Created`);
}