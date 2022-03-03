import Heading from "../heading/heading";
import BananaImages from "../banana-images/banana-images";
import * as _ from 'lodash';

class BananaPage {
    render() {
        const heading = new Heading();
        const bananaImages = new BananaImages();

        heading.render(_.upperFirst('Banana image'));
        bananaImages.render();

        import('ImageCaptionApp/ImageCaptionPage').then(ImageCaptionModule => {
            const ImageCaption = ImageCaptionModule.default;
            const imageCaption = new ImageCaption();
            imageCaption.render('Bananas are very high in which mineral');
        })
    }
}

export default BananaPage;
