import style from './clearButton.scss'
const el = document.createElement('button');
el.innerHTML = 'Clear';
el.classList.add([style.button])
el.onclick = function () {
    alert('clicked')
}
document.body.appendChild(el);