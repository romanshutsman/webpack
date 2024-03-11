import style from './index.scss';
import './clearButton';
import _ from 'lodash';
import logo from './assets/logo.png'
import font from './assets/fonts/MadimiOne-Regular.ttf'

const btn1 = document.getElementById('buttonClicked2')
const logoEl = document.getElementById('logo')

btn1.addEventListener('click', function(){
    const el = document.getElementById('header');
    el.innerHTML = 'Updated code';
    el.classList.add([style.header])

    const list = document.getElementById('list');
    const listItems = ['apple', 'banana'];
    list.innerHTML = 'Updated code';
    _.forEach(listItems, e => {
        const el = document.createElement('li');
        el.innerHTML = e;
        list.appendChild(el);
    })
})

btn1.classList.add([style.button])

logoEl.src = logo;