// import _ from "lodash";
import './assets/reset.css';
import './assets/index.css';
import menuImg from './assets/menu.png'
import data from './assets/data.xml'
import printMe from './print'

function component() {
    let element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "hello webpack!!!"
    element.classList.add('hello');
    // let img = new Image();
    // img.src = menuImg;
    // element.appendChild(img);
    // console.log(data);
    let btn = document.createElement('button');
    btn.innerHTML = 'Click and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());