const fs = require("fs")
const path = require("path")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const {transformFromAst} = require("@babel/core")
module.exports = class webpack {
    constructor(option) {
        console.log(option);
        const {entry, output} = options
        this.entry = entry
        this.output = output
    }

    run() {
        // 开始分析内容
        const info = this.parse(this.entry)
        console.log(info);
    }

    parse(entryFile) {
        // 开始分析入口模块的内容
        const content = fs.readFileSync(entryFile, "utf-8")
        console.log(content);
        const ast = parser.parse(content, {
            sourceType: "module"
        })
        const dependencies = {}

        traverse(ast, {
            ImportDeclaration({node}) {
                // "./a.js" => "./src/a.js"
                const newPathName = path.join(path.dirname(entryFile), node.source.value)
                console.log(path.dirname(entryFile), node.source.value);
                console.log(newPathName);
                dependencies[node.source.value] = newPathName
            }
        })
        const {code} = transformFromAst(ast, null, {
            presets: ["@babel/preset-env"]
        })
        // console.log(ast.program.body);
        console.log(dependencies);

        return {
            entryFile,
            dependencies,
            code,
        }
    }
}