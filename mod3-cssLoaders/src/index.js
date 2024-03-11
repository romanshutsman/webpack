import style from './index.css';
import './clearButton';
import _ from 'lodash';

const btn1 = document.getElementById('buttonClicked2')

btn1.addEventListener('click', function(){
    const el = document.getElementById('header');
    el.innerHTML = 'Updated code';

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
