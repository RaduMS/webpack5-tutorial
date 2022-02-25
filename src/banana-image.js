import Heading from "./components/heading/heading";
import BananaImages from "./components/banana-images/banana-images";
import * as _ from 'lodash';
import React from 'react'

const heading = new Heading();
const bananaImages = new BananaImages();

heading.render(_.upperFirst('Banana image'));
bananaImages.render();
