document.addEventListener("DOMContentLoaded", function () {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  question8();
  question9();
});

function question1() {
  document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function question2() {
  document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function question3() {
  document.body.style.backgroundColor = "#232323";
}
function question4() {
  document.querySelectorAll(".item").forEach((item) => {
    item.style.border = "2px solid black";
  });
}
function question5() {
  document.getElementById("task5").href = "https://www.springboard.com/";
}

function question6() {
  document.getElementById("task6").value = "DOM Master";
}
function question7() {
  document.getElementById("task7").classList.add("new-class");
}
function question8() {
  const newButton = document.createElement("button");
  newButton.innerText = "New Button";
  document.getElementById("task8").appendChild(newButton);
}

//Question 9: an element can only be removed by its parent node.
function question9() {
  //build a const as a pointer
  const task9Element = document.getElementById("task9");
  task9Element.parentNode.removeChild(task9Element);
}
