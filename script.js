
let countdownInterval;
let targetDate;

function startCountdown() {
  clearInterval(countdownInterval);
  
  const inputTime = document.getElementById("targetTime").value;
  if (!inputTime) {
    alert("Please select a target date and time.");
    return;
  }
  
  targetDate = new Date(inputTime).getTime();
  
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    alert("⏰ Time's up!");
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  flipNumber("days", days);
  flipNumber("hours", hours);
  flipNumber("minutes", minutes);
  flipNumber("seconds", seconds);
}

function flipNumber(id, newNumber) {
  const flip = document.getElementById(id);
  const currentNumber = flip.textContent;
  
  if (currentNumber !== String(newNumber).padStart(2, "0")) {
    flip.textContent = String(newNumber).padStart(2, "0");
    flip.style.animation = "none";
    flip.offsetHeight;
    flip.style.animation = null;
  }
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("days").textContent = "00";
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("targetTime").value = "";
}

document.getElementById("startBtn").addEventListener("click", startCountdown);
document.getElementById("resetBtn").addEventListener("click", resetCountdown);
