define(function (require, exports, module) {
  console.log(require);
  console.log(exports);
  console.log(module);
  let fn = function () {
    let app = document.getElementById('app');
    app.innerHTML = 'app from module1';
  };
  let fn2 = function () {
    let app = document.getElementById('app');
    app.innerHTML = 'app from module1-2';
  };
  let fn3 = function () {
    let app = document.getElementById('app');
    app.innerHTML = 'app from module1-3';
  };
  exports.fn = fn;
  module.exports = fn2;
  return fn3;
});