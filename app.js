const display = document.querySelector(".time");

function displayTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  display.innerHTML = `
    <p class="digit">${getValue(hour, "tens")}</p>
    <p class="digit">${getValue(hour)}</p>
    <p class="digit">:</p>
    <p class="digit">${getValue(minutes, "tens")}</p>
    <p class="digit">${getValue(minutes)}</p>
    <p class="digit">:</p>
    <p class="digit">${getValue(seconds, "tens")}</p>
    <p class="digit">${getValue(seconds)}</p>
    
  `;
}

function formatTime(value) {
  return value < 10 ? `0${value}` : `${value}`;
}

function getTens(value) {
  return parseInt(value / 10);
}

function getUnits(value) {
  return value % 10;
}

function getValue(value, valueType) {
  const currentTime = formatTime(value);

  return valueType === "tens" ? getTens(currentTime) : getUnits(currentTime);
}

function clearDisplay() {
  display.innerHTML = " ";
}

setInterval(displayTime, 1000);
