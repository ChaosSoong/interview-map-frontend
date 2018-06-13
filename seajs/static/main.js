define(function(require, exports, module){
    let app = document.getElementById("app")
    // 不使用别名
    // let module1 = require("./module1.js")
    // let module2 = require("./module2.js")

    // 使用别名
    let module1 = require("module1")
    let module2 = require("module2")
    let $ = require('jquery')

    console.log(module1)
    console.log(module2)
    console.log($)
    $("#app").css("color", "red")
    app.innerHTML = module2.app
})