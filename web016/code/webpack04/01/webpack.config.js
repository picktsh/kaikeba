const path = require('path')
module.exports = {
    resolve: {
        // 查找三方依赖
        modules: [path.resolve(__dirname, "./node_modules")],
        alias: {
            // 减少查找过程
            // 起别名
            "@": path.resolve(__dirname, "./src/css"),
            react: "./node_modules/react/umd/react.production.min.js",
            "react-dom": "./node_modules/react-dom/umd/react-dom.production.min.js",
        },
        // 官方推荐不要滥用
        extensions: [".js", "json", ".jsx",],
    },
    // 排除打包,cdn资源不打包进bundle
    externals: {
        // jquery
        jquery: "jQuery",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src/"),
                use: [
                    {
                        loader: 'style-loader',
                    },
                ]
            }
        ]
    }
}