'use strict';

const number = document.querySelector('#number');
let pos = number.value.length;
number.value = '+7 (';

number.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.key.match(/[0-9]/) && pos < 18 && (pos == '8' || pos == '15' || pos == '12')) {
    number.value += ' ' + e.key;
    pos = number.value.length;
  } else if (e.key.match(/[0-9]/) && pos < 18) {
    number.value += e.key;
    pos = number.value.length;
    if (pos == '7') {
      number.value += ') ';
    } else if (pos == '12' || pos == '15') {
      number.value += ' ';
    }
    pos = number.value.length;
  }

  if (e.key == 'Backspace') {
    if (pos == '14' || pos == '17' || pos == '10' || pos == '8') {
      number.value = number.value.substring(0, pos - 2);
    } else if (pos > 4) {
      number.value = number.value.substring(0, pos - 1);
    }
    pos = number.value.length;
  }
});