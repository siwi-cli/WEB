const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const entry = require('./entry')
module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: path.join('js', '[name].js')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }]
                })
            },
            {
                test: /\.styl/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true 
                            },
                        },
                        'stylus-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: path.join('css', 'main.css'),
        })
    ]
}