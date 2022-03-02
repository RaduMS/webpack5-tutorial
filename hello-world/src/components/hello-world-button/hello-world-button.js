import './hello-world-button.css'
import './hello-world-button-scss-style.scss'

class HelloWorldButton {
    // you can write class but the majority browsers does not support properties just methods
    buttonCssClass = 'hello-world-button'
    buttonPropertyAddedCssClass = 'property-added-css-class'

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello World!';
        button.classList.add(this.buttonCssClass);
        button.classList.add(this.buttonPropertyAddedCssClass);

        button.onclick = function () {
            // alert('Hello World paragraph added');

            const p = document.createElement('p');

            p.innerHTML = 'Hello World!';
            p.classList.add('hello-world-text');

            body.appendChild(p);
        }

        body.appendChild(button);
    }
}

export default HelloWorldButton;
