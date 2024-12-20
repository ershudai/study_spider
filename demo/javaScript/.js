// 循环
function xh(){
    var alit = [1,2,3,4,5]

    for (var index=0; index < alit.length; index++){
        console.log(alit[index])
    }

    for (x of alit){
        console.log(x)
    }

    var index = 0
    while (index < alit.length){
        console.log(alit[index])
        index++
    }

    index = 0
    do {
        console.log(alit[index])
        index++
    }while (index < alit.length)
}
// xh()

// 对象
var obj = {
    name: '名称',
    age: 18,
    hello: function () {
        console.log('hello', obj.age)
    }
}
function obj_log(obj){
    console.log(obj.name);
    obj.hello()
    
    var obj = new Object();
    obj.name = '对象名称'
    obj.hello = function () {
        console.log('加密的方法')
    }
    
    console.log(obj.name)
}
// obj_log(obj)

// 构造函数  创建好几个对象
function start(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hello = function () {
        console.log('hello')
    }
}
function new_start(){
    var bc = new start('大哥', '35', '男')
    console.log(bc.name)
    bc.hello()
    var bc2 = new start('二哥', '', '男')
}
// new_start()


// init 触发
// 构造器创建对象     特殊的函数   主要用来初始化对象    constructor
// 类     es6 语法之后
// class aa {
//     constructor(name, age) {
//         ........
//     }
// }

// 定义类
class Classname {
    // 构造方法
    constructor(name) {
        this.name = name
        console.log(`这是自定义类中的构造方法，在构造时候触发${name}`)  // 构造方法
    }
    static age = 18;  // 静态属性
    #attr = 123;   // 私有属性
    // 静态方法
    static sfun(data) {
        console.log(`静态方法,类名调用静态方法${data}`)
    }
    // 创建普通方法
    hello() {
        console.log('静态属性', Classname.age)
    }
}
function cls(){
    var cls1 = new Classname('我的类')
    var attr=cls1["#attr"]      // 私有属性,无法访问，只能内部访问
    console.log(attr)           //输出undefined
    console.log(Classname.age) // 静态属性只能类名调用，无法实例调用
    Classname.sfun('123')   // 静态属性只能类名调用，无法实例调用
}
// cls()


// 定时器
// setTimeout   指定的时间间隔之后  执行一次
function hello() {
    const now = new Date();
    console.log(now);
}
// 执行一次的定时器   单位是毫秒
t1 = setTimeout(hello, 500)
clearTimeout(t1)     // 清除定时器
// setInterval  指定的时间间隔之后  重复执行
t2 = setInterval(hello, 1500)
clearInterval(t2)   // 清除定时器


// promise基本格式  是一种用于处理异步操作的对象
// promise的状态有三种
// 1. pending 等待中
// 2. fulfilled 成功
// 3. rejected 失败
// promise的状态只能变化一次，从pending进入fulfilled或者rejected，它状态就不可再改变。

// new Promise(function (resolve, reject) {
//         // 要做的数据
// })
// cbk
function getasync_data() {
    // resolve 执行成功  返回数据给回调方法
    // reject  执行识别
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var err = new Error('错误')
            // resolve(err) // 成功---返回数据给回调方法
            reject(err) // 失败---返回数据给回调方法
        }, 1000)
    })
}
// getasync_data().then(function (data) {
//     console.log('获取的加密数据  ')
//     console.log(data)
// }).catch(function (error) {
//     console.log('报错')
// })


// async/await使用

function getasync_data() {
    // resolve 执行成功  返回数据给回调方法
    // reject  执行识别
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // var err = new Error('错误')
            resolve('111')
        }, 1000)
    })
}

// async异步函数
async function main() {
    await 等待异步操作完成
    var data = await getasync_data()
    console.log(data)
}
// main()
// console.log(123)
// console.log(123)


// JSON数据转换
function aa() {
    console.log('123')
}
// console.log(aa.toString());
var aa = '{"name": "bc", "age": 123}'
// console.log(aa)
// console.log(aa.toString())

// JSON.parse 转换数据成 对象格式
bb = JSON.parse(aa)
// JSON.stringify  对象数据转换成json数据
cc = JSON.stringify(bb)
// console.log(bb);
// console.log(cc);


