const path = require('path')
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src/"),
                use: {
                    loader: 'style-loader,'
                }
            }
        ]
    }
}