const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './../src/assets/js/index.js'),
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'js/bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name]/[name][ext]'
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][ext]'
                }
            },
            {
                test: /\.(mp4$|ogv)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/video/[name][ext]'
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
};