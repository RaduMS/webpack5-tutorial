const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9000/static/'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            index: 'dashboard.html',
            writeToDisk: true
        },
        historyApiFallback: {
          index: 'dashboard.html'
        }
    },
    module: {
        rules: [
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
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "dashboard.html",
            title: "Dashboard"
        }),
        new ModuleFederationPlugin({
            name: 'App',
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/static/remoteEntry.js',
                BananaApp: 'BananaApp@http://localhost:9002/static/remoteEntry.js'
            }
        })
    ]
};
