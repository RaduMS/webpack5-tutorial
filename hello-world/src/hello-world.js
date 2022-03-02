import Heading from "./components/heading/heading.js";
import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import * as _ from 'lodash';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render(_.upperFirst('Hello world'));
helloWorldButton.render();

// addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode')
}
