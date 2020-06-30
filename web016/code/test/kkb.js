// 代码;逻辑
// 测试就是给定的输入,判断期望的输出
// 这么测试这个代码呢?
function add(a, b) {
    // 此处会有 "a"字符串和数字的值比较,所以使用 ==
    if (Number(a) == a && Number(b) == b) {
        return Number(a) + Number(b)
    }
    return a + b
}