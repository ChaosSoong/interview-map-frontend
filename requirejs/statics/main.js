require.config({
  baseUrl: 'statics/js/',
  paths: {
    jquery: '../../third-module/jquery-1.11.0.min',
    module1: 'module1',
    module2: 'module2',
    alert: 'noModule'
  },
  shim: {
    alert: {
      deps: [],
      exports: 'myFun'
    }
  }
});
require(['alert'], function () {
  var m = new myFun(1, 2);
  alert(m.add());
});
require(['module1', 'jquery', 'module2'], function (m1, j, m2) {
  j("#app").css('color', 'red');
  m1();
  m2();
});