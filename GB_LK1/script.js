const heading2 = document.getElementById('heading');
const heading3 = document.querySelector('#heading');
const listEls = document.getElementsByClassName('list');
const listElsQS = document.querySelectorAll('.list');
const heading = document.querySelector('.title');
const text = document.querySelectorAll('.text');
const imgEl = document.querySelector('.img');
const sectionElement = document.querySelector('section');
const paragraphElement = document.createElement('p');
const paragraphElText = document.createTextNode('Содержимое текстового узла');
const btnEl = document.querySelector('.btn');
const textEl = document.createElement('p');
const contentEl = document.querySelector('.content');
const link = document.querySelector('.link');

text.forEach((element) => {
  console.log(element);
});

console.log(heading);
console.log(text);

paragraphElement.textContent = 'Новый текст параграфа';
sectionElement.appendChild(paragraphElement);

heading.textContent = 'New title';

paragraphElement.appendChild(paragraphElText);

heading2.remove();

textEl.textContent = 'fkbksfbksf';

btnEl.onclick = () => {
  btnEl.textContent = 'Товар в корзине';
  contentEl.appendChild(textEl);
  imgEl.src = 'newphoto.jpg';
};

link.href = 'https://developer.mozilla.org/ru/';

imgEl.onclick = () => (imgEl.src = 'newSrc');

let count = 0;
const newBtn = document.createElement('button');
newBtn.textContent = 'Push';
newBtn.onclick = () =>
  (heading.textContent = `Вы нажали на кнопку ${++count} раз`);
sectionElement.appendChild(newBtn);
