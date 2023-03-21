module.exports = {
    entry: './src/lambda.js',
    target: 'node',
    mode: 'production',
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    }
}