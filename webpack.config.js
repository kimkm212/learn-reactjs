module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        rules: [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                options : {
                    presets : [ 'es2015', 'react', 'stage-2'],
                    plugins : ["transform-object-rest-spread"]
                },
                exclude : /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }

        ]
        /*        loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            cacheDirectory: true,
                            presets: ['es2015', 'react', 'stage-2'],
                            plugins: ["transform-object-rest-spread"]
                        }
                    },
                    {
                        test: /\.css$/,
                        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                    }
                ]*/
    }
};