const parse = require('@babel/parser')
const traverse = require('@babel/traverse').default
const types = require('@babel/types')
const generator = require("@babel/generator").default;

// JS 转 ast语法树
let jscode = `var b = 1 + 2;
var c = "coo" + "kie";
var a = 1+1,b = 2+2;
var c = 3;
var d = "1" + 1;
var e = 1 + '2';
`
// 转换js代码为ast树结构
let ast = parse.parse(jscode);

// 遍历ast语法树
traverse(ast, {
    // 遍历节点
    BinaryExpression(path) {
        var {left,operator,right} = path.node;
        if (operator === '+'){
            if(
                (types.isNumericLiteral(left) && types.isNumericLiteral(right)) ||
                (types.isStringLiteral(left) && types.isStringLiteral(right)) ||
                (types.isStringLiteral(left) && types.isNumericLiteral(right)) ||
                (types.isNumericLiteral(left) && types.isStringLiteral(right))
            ){
                value=left.value+right.value;
                // 替换节点当中的值
                path.replaceWith(types.valueToNode(value));
            }
        }

    }
})

// 将ast还原成JavaScript代码
let {code} = generator(ast);
console.log(code)