const path = require('path')
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/client/index.js",
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist/**/*')]
        })
        // TODO: configure workbox-webpack-plugin
    ]
}