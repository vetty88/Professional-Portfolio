var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/App.js'
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
    ],
},
plugins: [
    new webpack.NamedModulesPlugin(),
]
};