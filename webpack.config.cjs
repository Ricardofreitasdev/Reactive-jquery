const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/Jquery.js',
        output: {
            filename: isProduction ? 'reactive-jquery.min.js' : 'reactive-jquery.js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules|\.test\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
    };
};
