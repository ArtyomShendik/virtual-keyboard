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


// fourth row

const row4 = document.querySelectorAll('.row')[3];

const shift = document.createElement('button');
shift.classList.add('keys');
shift.classList.add('shift-key');
shift.classList.add('shift-left');
shift.innerHTML = 'Shift';
row4.appendChild(shift);

const z = document.createElement('button');
z.classList.add('keys');
z.innerHTML = 'z';
row4.appendChild(z);

const x = document.createElement('button');
x.classList.add('keys');
x.innerHTML = 'x';
row4.appendChild(x);

const xButton = document.createElement('button');
xButton.classList.add('keys');
xButton.innerHTML = 'x';
row4.appendChild(xButton);

const c = document.createElement('button');
c.classList.add('keys');
c.innerHTML = 'c';
row4.appendChild(c);

const v = document.createElement('button');
v.classList.add('keys');
v.innerHTML = 'v';
row4.appendChild(v);

const b = document.createElement('button');
b.classList.add('keys');
b.innerHTML = 'b';
row4.appendChild(b);

const n = document.createElement('button');
n.classList.add('keys');
n.innerHTML = 'n';
row4.appendChild(n);

const m = document.createElement('button');
m.classList.add('keys');
m.innerHTML = 'm';
row4.appendChild(m);

const comma = document.createElement('button');
comma.classList.add('keys');
comma.innerHTML = ',';
row4.appendChild(comma);

const left = document.createElement('button');
left.classList.add('keys');
left.innerHTML = '<';
row4.appendChild(left);

const right = document.createElement('button');
right.classList.add('keys');
right.innerHTML = '>';
row4.appendChild(right);

const question = document.createElement('button');
question.classList.add('keys');
question.innerHTML = '?';
row4.appendChild(question);

const shiftRight = document.createElement('button');
shiftRight.classList.add('keys');
shiftRight.classList.add('shift-key');
shiftRight.classList.add('shift-right');
shiftRight.innerHTML = 'Shift';
row4.appendChild(shiftRight);


// fifth row


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
input.setAttribute('type', 'text')
container.prepend(input)
