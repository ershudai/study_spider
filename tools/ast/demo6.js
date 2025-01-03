const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

// 合并值或转换类型
jscode = `
let nav=navigator["\x75\x73"+"\x65\x72"+"\x41\x67"+"\x65\x6e"+"\x74"];
let x = 1 + 2 + 3 +4 + 5 + 6 + 7;
var a = 0x25,b = 0b10001001,c = 0o123456,
d = "\x68\x65\x6c\x6c\x6f\x2c\x41\x53\x54",
e = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";
`

let ast = parse.parse(jscode);

const _jy = {
    "BinaryExpression|Identifier"(path) {
        const {confident, value} = path.evaluate();
        confident && path.replaceInline(types.valueToNode(value))
    },
    NumericLiteral({node}) {
        if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
            node.extra = undefined;
        }
    }

}

traverse(ast, _jy)

let {code} = generator(ast);
console.log(code);
// fs.writeFile(File2, code, (err) => {
// });
