console.log("Are you reading, Major Tong?")

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const myP = document.createElement('p');
myP.classList.add('myP');
myP.textContent = 'Hey I’m red!';
myP.style.color = 'red';

content.appendChild(myP);

const myH3 = document.createElement('h3');
myH3.textContent = 'I’m a blue h3!';
myH3.style.color = 'blue';
content.appendChild(myH3);

const pinkD = document.createElement('div');
pinkD.style.borderStyle = 'solid';
pinkD.style.backgroundColor = 'pink';

const myH1 = document.createElement('h1');
myH1.textContent = 'I\'m in a div!'
pinkD.appendChild(myH1);

const myP2 = document.createElement('p');
myP2.textContent = 'ME TOO!!'
pinkD.appendChild(myP2);

content.appendChild(pinkD);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});