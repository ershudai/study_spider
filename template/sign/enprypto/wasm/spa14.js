//https://spa14.scrape.center/page/2

const fs = require('fs');
const wasmCode=fs.readFileSync("./Wasm (2).wasm");
WebAssembly.instantiate(wasmCode,{
    "env": {},
    "wasi_snapshot_preview1": {}
}).then(result => {
    const instance = result.instance;
    const exportedFunc = instance.exports
    console.log(exportedFunc); // 调用 wasm 模块中的函数
    console.log(exportedFunc.encrypt(20, parseInt(Math.round((new Date).getTime() / 1e3).toString()))); // 调用 wasm 模块中的函数
    console.log(exportedFunc.encrypt(20, 1727361273)); // 调用 wasm 模块中的函数
})
