const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
        publicPath: "dist/"
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(ttf)$/,
                type: "asset/inline",
                // asset/inline from webpack config for ttf does not create a new file in dist but generate code in bundle.js
                // is good for files that are small, if files are big then bundle.js will be very big
                // if you use just asser and not specify inline or resource then the webpack will choose related to image size
                //
                // type: "asset"
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 3 * 1024 // 3 kilobites
                //     }
                // }
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource"
            },
            {
                test: /\.text$/,
                type: "asset/source"
            }
        ]
    }
}
