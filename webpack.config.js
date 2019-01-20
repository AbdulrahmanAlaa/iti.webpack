// Nodejs Modules
const path = require('path');
const fs = require('fs');
// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SourceMapWebpackPlugin = require('./configurations/source-map-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// import {Configuration} from 'webpack';

/**
 * @type {Configuration}
 */
const config = {
    //'' [''],{name:'./'}
    entry:
    {
        index: './src/index.js',
    },
    output: {
        /**D:\Projects\ITI.webpack\build */
        path: path.resolve(__dirname/**D:\Projects\ITI.webpack */, 'build'),
        filename: '[name].[chunkhash].bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new SourceMapWebpackPlugin(),
        new ExtractTextWebpackPlugin('style.css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include: fs.realpathSync('./src/Components/')
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include: fs.realpathSync('./src/Components/')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: fs.realpathSync('./src/Components/')
            },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader']
                }),
                exclude: fs.realpathSync('./src/Components/')
            },
            {
                test:/\.(jpe?g|gif|png|svg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:40000
                        }
                    }
                    ,
                    'image-webpack-loader'
                ]
            }
        ]
    }
};

module.exports = config;