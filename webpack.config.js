module.exports = {
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.ts$|tsx/,
            exclude: /node_modules/
        }]
    },
}
