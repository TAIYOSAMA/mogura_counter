const display = document.getElementById('displayText')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const startCover = document.getElementById('startCover')

function valueMinus () {
  const displayValue = parseInt(display.textContent)
  if (displayValue > 0) {
    display.textContent = displayValue - 1
  }
}

function valuePlus () {
  const displayValue = parseInt(display.textContent)
  display.textContent = displayValue + 1
}

function hideStartCover () {
  startCover.style.display = 'none'
  setTimeout(function(){
    startCover.style.display = 'flex'
    startCover.onclick = 0;
  },20000);
}

function setUp () {
  startCover.onclick = hideStartCover
  startCover.style.display = 'flex'
  display.textContent = 0
}

minus.onclick = valueMinus
plus.onclick = valuePlus
document.addEventListener('keydown', (e) => {
  const keyName = e.key
  if (e.key === 'r') {
    setUp()
  }
})
setUp()
