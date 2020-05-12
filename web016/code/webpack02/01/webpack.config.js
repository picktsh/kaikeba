const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {path: path.resolve(__dirname, "./dist"), filename: "[name].js",},
    mode: "development",
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader'],},
            {
                test: /\.less$/, use: [
                    'style-loader',
                    // {
                    //     loader: "css-loader",
                    //     // css module 开启
                    //     option: {modules: true}
                    // },
                    "css-loader",
                    'postcss-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)/,
                use: [
                    "url-loader"
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            // 选择html模板
            template: "./src/index.html",
            title: "HtmlWebpackPlugin"
        })
    ]
}
