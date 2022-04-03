var firstTask = document.getElementById("firstTask");
var secondTask = document.getElementById("secondTask");
var thirdTask = document.getElementById("thirdTask");
var fourthTask = document.getElementById("fourthTask");
var fifthTask = document.getElementById("fifthTask");

/* -------------------- First one -------------------- */
function firstDone() {
  if (firstTask.value.length != 0) {
    firstTask.style.background = "#09E01B";
  }
}
function firstClear() {
  document.getElementById("firstTask").value = "";
  firstTask.style.background = "white";
}

/* -------------------- Second one -------------------- */
function secondDone() {
  if (secondTask.value.length != 0) {
    secondTask.style.background = "#09E01B";
  }
}
function secondClear() {
  document.getElementById("secondTask").value = "";
  secondTask.style.background = "white";
}

/* -------------------- Third one -------------------- */
function thirdDone() {
  if (thirdTask.value.length != 0) {
    thirdTask.style.background = "#09E01B";
  }
}
function thirdClear() {
  document.getElementById("thirdTask").value = "";
  thirdTask.style.background = "white";
}

/* -------------------- Fourth one -------------------- */
function fourthDone() {
  if (fourthTask.value.length != 0) {
    fourthTask.style.background = "#09E01B";
  }
}
function fourthClear() {
  document.getElementById("fourthTask").value = "";
  fourthTask.style.background = "white";
}

/* -------------------- Fifth one -------------------- */
function fifthDone() {
  if (fifthTask.value.length != 0) {
    fifthTask.style.background = "#09E01B";
  }
}
function fifthClear() {
  document.getElementById("fifthTask").value = "";
  fifthTask.style.background = "white";
}

function clearEverything() {
  document.getElementById("firstTask").value = "";
  document.getElementById("secondTask").value = "";
  document.getElementById("thirdTask").value = "";
  document.getElementById("fourthTask").value = "";
  document.getElementById("fifthTask").value = "";
  firstTask.style.background = "white";
  secondTask.style.background = "white";
  thirdTask.style.background = "white";
  fourthTask.style.background = "white";
  fifthTask.style.background = "white";
}
