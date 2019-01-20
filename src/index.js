import './assets/styles/style.scss';
import { Math } from './math';
import buttonRenderFn from './Components/button.component';
import big from './assets/images/big.jpg';
import small from './assets/images/small.jpg';
console.log('big: ',big);
console.log('small: ',small);

const imgSmall = document.createElement('img');
imgSmall.src = small;


const imgBig = document.createElement('img');
imgBig.src = big;

document.body.append(imgBig,imgSmall);

const no = new Math().sub(1, 2);
buttonRenderFn();




