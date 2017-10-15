const path = require('path');

module.exports = {
    entry: './test',
    output: {
        filename: 'test.bundle.js'
    },
    resolveLoader: {
        alias: {
            'path-token-replacer-loader': path.join(__dirname, 'index')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'path-token-replacer-loader',
                exclude: /(node_modules)/,
                tokens: {
                    template: ''
                }
            }
        ]
    }
};