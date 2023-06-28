const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        port: 4323,
        historyApiFallback: true,
        hot: true,
        static: {
            directory: path.resolve(__dirname, "./../src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        },
                    },
                    // 'group-css-media-queries-loader',
                    "sass-loader",
                ],
            },
        ],
    },
    stats: {
        loggingDebug: ['sass-loader'],
    },
    devtool: 'inline-source-map',
};
