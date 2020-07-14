module.exports = {
    entry: "./index.js",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js' ],
    },
    output: {
        filename: './lib/nb.js',
        libraryTarget: 'umd',
        library: 'nb',
    },
    plugins: [
       
    ],
    node: {
    }
}
