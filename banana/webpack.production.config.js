const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/banana-image.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1000
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|ttf)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        // plugins: ["@babel/plugin-proposal-class-properties"]
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "banana-image.html",
            title: "Bananas",
            template: "src/page-template.hbs",
            description: "Some bananas",
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'BananaApp',
            filename: 'remoteEntry.js',
            exposes: {
                './BananaPage': './src/components/banana-page/banana-page.js'
            }
        })
    ]
};
