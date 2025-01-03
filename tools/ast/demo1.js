const parse=require("@babel/parser")
const traverse=require("@babel/traverse").default
// JS 转 ast语法树
jscode= 'var a = "\u0068\u0065\u006c\u006c\u006f\u002c\u0041\u0053\u0054";'
let ast=parse.parse(jscode);
// console.log(JSON.stringify(ast,null,'\t'))

// 用查找定位节点（ast结构树，访问器对象）
traverse(ast,{
    VariableDeclarator(path){
        console.log("Found identifier:",path.node.init.value)

        console.log(path.node);// 表示当前path下的node节点
        console.log(path.type);// 获取当前节点类型
        console.log(path.toString());// 用来获取当前遍历path的js源代码
        console.log(path.parentPath.node);//用于获取当前path下的父path，多用于判断节点类型
        console.log(path.get('init').toString());// 获取下面的节点
        console.log(path.container); // 用于获取当前path下的所有兄弟节点(包括自身)
        console.log(path)


        // 找到第一个后，可以停止遍历
        // path.stop();
    }
}
)
