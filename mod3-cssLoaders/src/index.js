import './index.css';
import _ from 'lodash';

document.getElementById('buttonClicked2').addEventListener('click', function(){
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
