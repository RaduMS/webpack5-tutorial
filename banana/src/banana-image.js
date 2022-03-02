import Heading from "./components/heading/heading";
import BananaImages from "./components/banana-images/banana-images";
import * as _ from 'lodash';

const heading = new Heading();
const bananaImages = new BananaImages();

heading.render(_.upperFirst('Banana image'));
bananaImages.render();


import('HelloWorldApp/HelloWorldButton')
    .then(HelloWorldButtonModule => {
        const HelloWorldButton = HelloWorldButtonModule.default;
        const helloWorldButton = new HelloWorldButton;
        helloWorldButton.render();
    })
