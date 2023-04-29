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


// second row

const row2 = document.querySelectorAll('.row')[1];

const tab = document.createElement('button');
tab.classList.add('keys');
tab.classList.add('tab-key');
tab.innerHTML = 'Tab';
row2.appendChild(tab);

const q = document.createElement('button');
q.classList.add('keys');
q.innerHTML = 'q';
row2.appendChild(q);

const w = document.createElement('button');
w.classList.add('keys');
w.innerHTML = 'w';
row2.appendChild(w);

const e = document.createElement('button');
e.classList.add('keys');
e.innerHTML = 'e';
row2.appendChild(e);

const r = document.createElement('button');
r.classList.add('keys');
r.innerHTML = 'r';
row2.appendChild(r);

const t = document.createElement('button');
t.classList.add('keys');
t.innerHTML = 't';
row2.appendChild(t);

const y = document.createElement('button');
y.classList.add('keys');
y.innerHTML = 'y';
row2.appendChild(y);

const u = document.createElement('button');
u.classList.add('keys');
u.innerHTML = 'u';
row2.appendChild(u);

const i = document.createElement('button');
i.classList.add('keys');
i.innerHTML = 'i';
row2.appendChild(i);

const o = document.createElement('button');
o.classList.add('keys');
o.innerHTML = 'o';
row2.appendChild(o);

const p = document.createElement('button');
p.classList.add('keys');
p.innerHTML = 'p';
row2.appendChild(p);

const braceRight = document.createElement('button');
braceRight.classList.add('keys');
braceRight.innerHTML = '{';
row2.appendChild(braceRight);

const braceLeft = document.createElement('button');
braceLeft.classList.add('keys');
braceLeft.innerHTML = '}';
row2.appendChild(braceLeft);

const slash = document.createElement('button');
slash.classList.add('keys');
slash.classList.add('slash-key');
slash.innerHTML = "/";
row2.appendChild(slash);


// third row

const row3 = document.querySelectorAll('.row')[2];

const capslock = document.createElement('button');
capslock.classList.add('keys');
capslock.classList.add('capslock-key');
capslock.innerHTML = 'Caps Lock';
row3.appendChild(capslock);

const a = document.createElement('button');
a.classList.add('keys');
a.innerHTML = 'a';
row3.appendChild(a);

const s = document.createElement('button');
s.classList.add('keys');
s.innerHTML = 's';
row3.appendChild(s);

const d = document.createElement('button');
d.classList.add('keys');
d.innerHTML = 'd';
row3.appendChild(d);

const f = document.createElement('button');
f.classList.add('keys');
f.innerHTML = 'f';
row3.appendChild(f);

const g = document.createElement('button');
g.classList.add('keys');
g.innerHTML = 'g';
row3.appendChild(g);

const h = document.createElement('button');
h.classList.add('keys');
h.innerHTML = 'h';
row3.appendChild(h);

const j = document.createElement('button');
j.classList.add('keys');
j.innerHTML = 'j';
row3.appendChild(j);

const k = document.createElement('button');
k.classList.add('keys');
k.innerHTML = 'k';
row3.appendChild(k);

const l = document.createElement('button');
l.classList.add('keys');
l.innerHTML = 'l';
row3.appendChild(l);

const semicolon = document.createElement('button');
semicolon.classList.add('keys');
semicolon.innerHTML = ';';
row3.appendChild(semicolon);

const quotes = document.createElement('button');
quotes.classList.add('keys');
quotes.innerHTML = "'";
row3.appendChild(quotes);

const enter = document.createElement('button');
enter.classList.add('keys');
enter.classList.add('enter-key');
enter.innerHTML = "Enter";
row3.appendChild(enter);




