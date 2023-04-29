console.log('aa')

const body = document.body;

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');
container.appendChild(keyboardWrapper)

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard-keys');
keyboardWrapper.appendChild(keyboardKeys);

for (let i = 0; i < 6; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboardKeys.appendChild(row)
}

const tilda = document.createElement('button');
tilda.classList.add('keys');
tilda.innerHTML = '`';

const row1 = document.querySelectorAll('.row')[0];
row1.appendChild(tilda);

const one = document.createElement('button');
one.classList.add('keys');
one.innerHTML = '1';
row1.appendChild(one);

const two = document.createElement('button');
two.classList.add('keys');
two.innerHTML = '2';
row1.appendChild(two);

const three = document.createElement('button');
three.classList.add('keys');
three.innerHTML = '3';
row1.appendChild(three);

const four = document.createElement('button');
four.classList.add('keys');
four.innerHTML = '4';
row1.appendChild(four);

const five = document.createElement('button');
five.classList.add('keys');
five.innerHTML = '5';
row1.appendChild(five);

const six = document.createElement('button');
six.classList.add('keys');
six.innerHTML = '6';
row1.appendChild(six);

const seven = document.createElement('button');
seven.classList.add('keys');
seven.innerHTML = '7';
row1.appendChild(seven);

const eight = document.createElement('button');
eight.classList.add('keys');
eight.innerHTML = '8';
row1.appendChild(eight);

const nine = document.createElement('button');
nine.classList.add('keys');
nine.innerHTML = '9';
row1.appendChild(nine);

const zero = document.createElement('button');
zero.classList.add('keys');
zero.innerHTML = '0';
row1.appendChild(zero);

const dash = document.createElement('button');
dash.classList.add('keys');
dash.innerHTML = '-';
row1.appendChild(dash);

const equals = document.createElement('button');
equals.classList.add('keys');
equals.innerHTML = '=';
row1.appendChild(equals);

const backspace = document.createElement('button');
backspace.classList.add('keys');
backspace.classList.add('backspace-key');
backspace.innerHTML = 'Backspace';
row1.appendChild(backspace);


