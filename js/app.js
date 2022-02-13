function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newumber = previousNumber + number;
    calcInput.value = newumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  //   console.log("going to verifyPin");
  const success = document.getElementById("notify-success");
  const error = document.getElementById("notify-failled");

  if (pin == typedNumbers) {
    success.style.display = "block";
    error.style.display = "none";
  } else {
    error.style.display = "block";
    success.style.display = "none";
  }
}
