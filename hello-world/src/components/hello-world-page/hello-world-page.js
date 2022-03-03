import Heading from "../heading/heading.js";
import HelloWorldButton from '../hello-world-button/hello-world-button.js'
import * as _ from 'lodash';

class HelloWorldPage {
    render() {
        const helloWorldButton = new HelloWorldButton();
        const heading = new Heading();

        heading.render(_.upperFirst('Hello world'));
        helloWorldButton.render();
    }
}

export default HelloWorldPage;
