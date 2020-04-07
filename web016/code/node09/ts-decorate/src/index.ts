// 类装饰器
// 方法装饰器
function log() {
}

class Maths {
    @log
    add(a, b) {
        return a + b
    }
}
