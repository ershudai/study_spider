const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


jscode = `var d = true ? 1 : 2;`
let ast = parse.parse(jscode);

const _jy = {
    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {

        // 判断节点类型并将操作为void和-的节点过滤掉
        if (path.isUnaryExpression({operator: "-"}) ||
            path.isUnaryExpression({operator: "void"})) {
            return;
        }
        // evaluate()  获取计算之后的结果
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        // 替换节点
        path.replaceWith(types.valueToNode(value));
    },
}

traverse(ast, _jy)

let {code} = generator(ast);
console.log(code);
// fs.writeFile(File2, code, (err) => {
// });
