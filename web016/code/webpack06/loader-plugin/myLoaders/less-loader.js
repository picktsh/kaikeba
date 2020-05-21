const less = require("less")
modules.exports = function (source) {
    less.render(source, (e, output) => {
        this.callback(e, output)
    })
}