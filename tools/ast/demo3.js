const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default
const types = require('@babel/types')
const generator = require("@babel/generator").default;

// JS 转 ast语法树
let jscode = `
var arr = '3,4,0,5,1,2'['split'](',')
`
// 转换js代码为ast树结构
let ast = parse.parse(jscode);

// 遍历ast语法树
traverse(ast, {
    CallExpression(path) {
        let {callee, arguments} = path.node
        let data= callee.object.value
        let func= callee.property.value
        let arg= arguments[0].value
        var res=data[func](arg)
        path.replaceWithMultiple(types.valueToNode(res))
    }
})

// 将ast还原成JavaScript代码
let {code} = generator(ast);
console.log(code)