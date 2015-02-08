var webpack = require('webpack');

const ADDRESS = '0.0.0.0';
const PORT = 3000;

module.exports = {

    address: ADDRESS,
    port: PORT,
    devtool: 'source-map',
    watch: true,
    entry: [
        'webpack-dev-server/client?http://' + ADDRESS + ':' + PORT,
        'webpack/hot/only-dev-server',
        __dirname + '/src/react-a11y-video.jsx',
        __dirname + '/example/main.jsx'
    ],
    module: {
        loaders: [
            { test: /\.(jsx|es6)$/, exclude: /node_modules/, loaders: ['react-hot', '6to5-loader?optional=selfContained'] }
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'main.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
