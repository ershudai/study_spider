const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


jscode = `
var a,b,c;
a = 1;
b = 2;
c = 3;
`

let ast = parse.parse(jscode);

const _jy =    {
    VariableDeclarator(path) {
        let {scope, node, parentPath} = path;
        let {id, init} = node;
        if (init != null) return;
        let name = id.name;
        let nextSibling = parentPath.getNextSibling();
        if (!nextSibling.isExpressionStatement()) {
            return;
        }
        let expression = nextSibling.node.expression;
        if (!types.isAssignmentExpression(expression)) {//非赋值语句直接return
            return;
        }
        let {left, operator, right} = expression;
        if (!types.isIdentifier(left, {name: name}) || operator != "=") {//是否可以合并。
            return;
        }
        path.set("init", right);
        nextSibling.remove();
    }
}


traverse(ast, _jy)

let {code} = generator(ast);
console.log(code);
// fs.writeFile(File2, code, (err) => {
// });
