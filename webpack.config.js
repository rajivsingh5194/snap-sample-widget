const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    entry: './src/SampleWidget.js',
    mode: isProduction ? 'production' : 'development',
    output: {
        library: 'SampleWidget',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: `sample-widget${isProduction ? '.min' : ''}.js`,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader'
                }],
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        isProduction ?
        null :
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        isProduction ? null : new webpack.HotModuleReplacementPlugin(),
        // removes the null conditional entries
    ].filter(Boolean),
};