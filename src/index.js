import _ from 'lodash';
import './style.css';
import Icon from './bulba.png';

function component(){
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //add css class to element
    element.classList.add('hello');

    let myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component());
