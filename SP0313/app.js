let calOutput = document.getElementById("output");

function display(num) {
  calOutput.value += num;
}

function Calculate() {
  try {
    calOutput.value = eval(calOutput.value);
  } catch (err) {
    alert("Invalid");
  }
}

function Clear() {
  calOutput.value = "";
}

function del() {
  calOutput.value = calOutput.value.slice(0, -1);
}
