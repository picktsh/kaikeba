module.exports = function (source, sourceMap, ast) {
    // loader处理模块
    // 多个loader是有顺序的
    // 每个loader都要有返回值
    // console.log(source);
    // const result = source.replace("hello", this.query.name)
    // console.log(result);
    // return source
    // this.callback() // 返回多个信息
    // return this.callback(null)
    const callback = this.sync()
    setTimeout(function () {
        const result = source.replace("hello", this.query.name)
        callback(result)
    }, 1000)
}