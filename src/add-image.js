import banana from './banana.png';
import bananaTTF from './banana.ttf';
import bananaText from './textFile.text'

function addImage () {
    const img = document.createElement('img');

    // asset/inline from webpack config for ttf does not create a new file in dist but generate code in bundle.js
    // is good for files that are small, if files are big then bundle.js will be very big
    // if you use just asser and not specify inline or resource then the webpack will choose related to image size
    const imgTTF = document.createElement('img');
    const body = document.querySelector('body');

    img.alt = bananaText;
    img.width = 300;
    img.src = banana;

    imgTTF.alt = 'bananas';
    imgTTF.width = 300;
    imgTTF.src = bananaTTF;

    body.appendChild(img);
    body.appendChild(imgTTF);
}

export default addImage;
