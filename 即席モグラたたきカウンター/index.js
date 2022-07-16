const display = document.getElementById('displayText')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

function valueMinus() {
  const displayValue = parseInt(display.textContent)
  if (displayValue > 0) {
    display.textContent = displayValue - 1
  }
}

function valuePlus() {
  const displayValue = parseInt(display.textContent)
  display.textContent = displayValue + 1
}

minus.onclick = valueMinus
plus.onclick = valuePlus
