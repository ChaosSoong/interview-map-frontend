define(function(require, exports, module){
    let app = "module1-app"
    // 使用别名引入模块
    let module2 = require("module2")
    console.log(module2)
    exports.app = app
})