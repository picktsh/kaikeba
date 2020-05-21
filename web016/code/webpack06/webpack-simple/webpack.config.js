const path = require("path")
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    resolveLoader: ["node_modules", "./myLoaders"],
    output: {
        path: path.resolve(__dirname, "./src"),
        name: "[name].js"
    }
}