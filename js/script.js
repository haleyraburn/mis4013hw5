function greetUser() {
  const userName = prompt("What's your name?");
  if (userName != null && userName !== "") {
    document.getElementById('result').innerHTML = "Hello," + userName +"! Welcome to the site.";
  } else {
    document.getElementbyId('result').innerHTML = "Hello, guest! Welcome to the site.";
  }
}

function calculateSum() {
  let num1 = 10;
  let num2 = 20;
  let sum = num1 + num2;
  document.getElementbyId('result').innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + sum;
}

function changeBackgroundColor() {
  const colors = ["#FFDDC1", "#D1C4E9", "#B3E5FC", "#C9E6C9", "#FFEB3B"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function toggleParagraph() {
  let para = document.getElementById("togglePara");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}

function countdown() {
  let countdownValue = 5;
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "Countdown starting from: " + countdownValue;

  let intervalId = setInterval(function() {
    countdownValue--;
    resultDiv.innerHTML = "Countdown: " + countdownValue;
    if (countdownValue === 0) {
      clearInterval(intervalId);
      resultDiv.innerHTML = "Countdown finished!";
    }
  }, 1000);
}
