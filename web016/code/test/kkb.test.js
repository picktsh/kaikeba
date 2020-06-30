/**
 * 用来测试的函数
 * @param title 测试的名字
 * @param fn 测试的函数
 */
function test(title, fn) {
    try {
        fn()
        console.log(title, '测试通过');
    } catch (e) {
        console.error(e);
        console.error(title, '测试失败');
    }
}

function expect(ret) {
    return {
        toBe(arg) {
            if (ret !== arg) {
                throw Error(`预期和实际不符,预期是: ${arg},实际是: ${ret}`)
            }
        }
    }
}

test('测试数字相加', () => {
    expect(add(1, 2)).toBe(3)
})


// 新的开发模式 TDD
// 比如说想让add函数支持字符串相加, TDD就是先写测试
// 然后报错,再去写逻辑
test('测试字符串相加', () => {
    expect(add(1, 2)).toBe(3)
})