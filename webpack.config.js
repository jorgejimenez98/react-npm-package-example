module.exports = {
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.ts$|tsx/,
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: [resolve(process.cwd(), 'src'), 'node_modules'],
        extensions: ['*', '.ts', '.tsx', '.json'],
        symlinks: false,
        cacheWithContext: false
    }
}
