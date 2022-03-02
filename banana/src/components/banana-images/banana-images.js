import './banana-images.scss';
import bananasImage from './banana.png';
import altBananaImage from './textFile.txt';

class BananaImages {
    render() {
        const image = document.createElement('img');
        const body = document.querySelector('body');

        image.src = bananasImage;
        image.alt = altBananaImage;
        image.classList.add('banana-image');

        body.appendChild(image);
    }
}

export default BananaImages;
