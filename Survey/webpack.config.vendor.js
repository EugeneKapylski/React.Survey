const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundleFolder = 'wwwroot/dist/';
const srcFolder = './ClientApp/';

module.exports = {
    entry: {
        main: srcFolder + 'index.jsx'
    },
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, bundleFolder),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                })
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: srcFolder + 'index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Constants: path.resolve(__dirname, srcFolder + 'constants/')
        }
    }
};