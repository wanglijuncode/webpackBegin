import _ from 'lodash';
import './style.css';
import girls from './girls.jpg';
import Data from './data.xml';
function component(){
    var element = document.createElement('div');
    element.innerHTML=_.join(['hello','webpack'],'');
    element.classList.add('hello');
    var mygirl=new Image();
    mygirl.src=girls;
    element.appendChild(mygirl);
    console.log(Data);
    return element;
}
document.body.appendChild(component());