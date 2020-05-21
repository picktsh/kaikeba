module.exports = function (source) {
    return `const ele = document.createElement('style');
    ele.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(ele)
    `
}