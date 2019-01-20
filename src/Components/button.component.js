import './button.component.scss';
export default () => {
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.classList.add('btn-primary');
    button.classList.add('bold');
    button.onclick = () => {
         System.import('./Users/Users').then(m=>console.log(m));   
    };
    document.body.appendChild(button);
};
