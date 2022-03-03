const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/image-caption.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/static/'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 9003,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'image-caption.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    "handlebars-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "image-caption.html",
            title: "Image Caption",
            template: "src/page-template.hbs",
            description: "Image caption"
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ImageCaptionPage': './src/components/image-caption/image-caption.js'
            }
        })
    ]
};
