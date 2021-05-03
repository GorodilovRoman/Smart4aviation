window.onload = function(){
const calculate = document.getElementById('calculate');
calculate.addEventListener('click', convertBase);
}

const range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');

function convertBase() {
  let fromBase = Number(document.getElementById('sbase').value);
  let toBase = Number(document.getElementById('tbase').value);
  let value = document.getElementById('input').value + '';
  let fromRange = range.slice(0, fromBase);
  let toRange = range.slice(0, toBase);
  var decValue = value.split('').reverse().reduce(function (carry, digit, index) {
    if (fromRange.indexOf(digit) === -1) throw new Error('Invalid digit `'+digit+'` for base '+fromBase+'.');
    return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index));
  }, 0);

  var newValue = '';
  while (decValue > 0) {
    newValue = toRange[decValue % toBase] + newValue;
    decValue = (decValue - (decValue % toBase)) / toBase;
  }
  document.getElementById('output-value').innerHTML = newValue;
}
