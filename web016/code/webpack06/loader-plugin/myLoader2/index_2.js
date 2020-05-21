module.exports = function (source, sourceMap, ast) {
    const result = source.replace("hello", this.query.name)
    console.log(result);
    return source
}