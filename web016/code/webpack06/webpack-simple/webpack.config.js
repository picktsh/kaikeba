const path = require("path")
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./src"),
        name: "[name].js"
    }
}