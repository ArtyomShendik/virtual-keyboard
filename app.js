const body = document.body;
const container = document.createElement('div');
container.classList.add('container');
body.prepend(container);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Клавиатура создана в операционной системе Windows'
body.prepend(title)

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');
container.appendChild(keyboardWrapper)

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard-keys');
keyboardWrapper.appendChild(keyboardKeys);

for (let i = 0; i < 5; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboardKeys.appendChild(row)
}

const row1 = document.querySelectorAll('.row')[0];
const row2 = document.querySelectorAll('.row')[1];
const row3 = document.querySelectorAll('.row')[2];
const row4 = document.querySelectorAll('.row')[3];

let firstRow = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
let secondRow = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
let thirdRow = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
let fourthRow = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

const init = () => {
  let out = '';
  let out2 = '';
  let out3 = '';
  let out4 = '';

  for(let i = 0; i < firstRow.length; i++) {
    out += '<button class="keys keys-char" data="'+ firstRow[i] +'">'+String.fromCharCode(firstRow[i])+'</button>';
  }
  row1.innerHTML = out;

  for(let i = 0; i < secondRow.length; i++) {
    out2 += '<button class="keys keys-char" data="'+ secondRow[i] +'">'+String.fromCharCode(secondRow[i])+'</button>'
  }
  row2.innerHTML = out2;

  for(let i = 0; i < thirdRow.length; i++) {
    out3 += '<button class="keys keys-char" data="'+ thirdRow[i] +'">'+String.fromCharCode(thirdRow[i])+'</button>';
  }
  row3.innerHTML = out3;

  for(let i = 0; i < fourthRow.length; i++) {
    out4 += '<button class="keys keys-char" data="'+ fourthRow[i] +'">'+String.fromCharCode(fourthRow[i])+'</button>';
  }
  row4.innerHTML = out4;
}

init();

const backspace = document.createElement('button');
backspace.classList.add('keys');
backspace.classList.add('backspace-key');
backspace.innerHTML = 'Backspace';
row1.appendChild(backspace);

const tab = document.createElement('button');
tab.classList.add('keys');
tab.classList.add('tab-key');
tab.innerHTML = 'Tab';
row2.prepend(tab);

const capslock = document.createElement('button');
capslock.classList.add('keys');
capslock.classList.add('capslock-key');
capslock.innerHTML = 'Caps Lock';
row3.prepend(capslock);

const changedChars = () => {
  let elems = document.querySelectorAll('.keys-char');
  elems.forEach(item => {
    if (item.textContent === item.textContent.toLowerCase()) {
      let newItem = item.textContent.toUpperCase();
      return item.textContent = newItem;
    } else {
      let newItem = item.textContent.toLowerCase();
      return item.textContent = newItem;
    }
  })
}

const capsLock = document.querySelector('.capslock-key');
capsLock.addEventListener('click', changedChars);


const enter = document.createElement('button');
enter.classList.add('keys');
enter.classList.add('enter-key');
enter.innerHTML = "Enter";
row3.appendChild(enter);

const shift = document.createElement('button');
shift.classList.add('keys');
shift.classList.add('shift-key');
shift.classList.add('shift-left');
shift.innerHTML = 'Shift';
row4.prepend(shift);

const shiftRight = document.createElement('button');
shiftRight.classList.add('keys');
shiftRight.classList.add('shift-key');
shiftRight.classList.add('shift-right');
shiftRight.innerHTML = 'Shift';
row4.appendChild(shiftRight);

const row5 = document.querySelectorAll('.row')[4];

const ctrl = document.createElement('button');
ctrl.classList.add('keys');
ctrl.classList.add('ctrl-key');
ctrl.classList.add('ctrl-left');
ctrl.innerHTML = 'Ctrl';
row5.appendChild(ctrl);

const win = document.createElement('button');
win.classList.add('keys');
win.classList.add('win-key');
win.innerHTML = 'Win';
row5.appendChild(win);

const alt = document.createElement('button');
alt.classList.add('keys');
alt.classList.add('alt-key');
alt.classList.add('alt-left');
alt.innerHTML = 'Alt';
row5.appendChild(alt);

const space = document.createElement('button');
space.classList.add('keys');
space.classList.add('space-key');
space.innerHTML = ' ';
row5.appendChild(space);

const altRight = document.createElement('button');
altRight.classList.add('keys');
altRight.classList.add('alt-key');
altRight.classList.add('alt-right');
altRight.innerHTML = 'Alt';
row5.appendChild(altRight);

const fn = document.createElement('button');
fn.classList.add('keys');
fn.innerHTML = 'Fn';
row5.appendChild(fn);

const ctrlRight = document.createElement('button');
ctrlRight.classList.add('keys');
ctrlRight.classList.add('ctrl-key');
ctrlRight.classList.add('ctrl-right');
ctrlRight.innerHTML = 'Ctrl';
row5.appendChild(ctrlRight);

// create input

const input = document.createElement('input');
input.classList.add('text');
input.setAttribute('type', 'text');
input.setAttribute('value', '')
input.innerHTML = input.getAttribute('value');
container.prepend(input);

document.onkeypress = (e) => {
  const keys = document.querySelectorAll('.keys');

  if (e.code !== 'Enter') {
    input.value += e.key;
  }

}

const allKeys = document.querySelectorAll('.keys');
allKeys.forEach((item) => {
  item.addEventListener('click', (e) => {
    allKeys.forEach(el => {
      setTimeout(() => {
        el.classList.remove('active');
      }, 200);
    })

    item.classList.add('active');

    if (e.target.textContent !== 'Backspace' && e.target.textContent !== 'Enter' && e.target.textContent !== 'Caps Lock' && e.target.textContent !== 'Shift' && e.target.textContent !== 'Tab' && e.target.textContent !== 'Ctrl' && e.target.textContent !== 'Fn' && e.target.textContent !== 'Alt' && e.target.textContent !== 'Win') {
      input.value += e.target.textContent;
    }
  })
})

const backSpace = document.querySelector('.backspace-key');

const deleteLastElement = () => {
  let inputValue = input.value;
  let lastElemArr = inputValue.split('').slice(0, -1);
  let sortedArr = [];

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] !== lastElemArr) {
      sortedArr.push(inputValue[i])
    }
  }
  return input.value = sortedArr.slice(0, -1).join('');
}

backSpace.addEventListener('click', deleteLastElement);

const deleteLastElemFromKeyboard = (e) => {
  if (e.key == 'Backspace') {
    let inputValue = input.value;
    let lastElemArr = inputValue.split('').slice(0, -1);
    let sortedArr = [];

    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] !== lastElemArr) {
        sortedArr.push(inputValue[i])
      }
    }

    backSpace.classList.add('active');
    setTimeout(() => {
      backSpace.classList.remove('active');
    }, 200)

    return input.value = sortedArr.slice(0, -1).join('');
  }

  if (e.key == 'CapsLock') {
    capsLock.classList.add('active');
    setTimeout(() => {
      capsLock.classList.remove('active');
    }, 200)
    changedChars();
  }

  if (e.key == 'Enter') {
    enter.classList.add('active');
    setTimeout(() => {
      enter.classList.remove('active');
    }, 200)
  }

  if (e.key == 'Tab') {
    tab.classList.add('active');
    setTimeout(() => {
      tab.classList.remove('active');
    }, 200)
  }

  if (e.code == 'ShiftLeft') {
    shift.classList.add('active');
    setTimeout(() => {
      shift.classList.remove('active');
    }, 200)
  }

  if (e.code == 'ShiftRight') {
    shiftRight.classList.add('active');
    setTimeout(() => {
      shiftRight.classList.remove('active');
    }, 200)
  }

  const btnElements = document.querySelectorAll('.keys-char')

  btnElements.forEach(el => {
    if (e.key == el.textContent) {
      el.classList.add('active');
      setTimeout(() => {
        el.classList.remove('active');
      }, 200)
    }
  })
}

window.addEventListener('keydown', deleteLastElemFromKeyboard);





