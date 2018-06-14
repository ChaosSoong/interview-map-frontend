require.config({
  baseUrl: 'statics/js/',
  paths: {
    jquery: '../../third-module/jquery-1.11.0.min',
    module1: 'module1',
    module2: 'module2',
    myFun: 'noModule'
  },
  shim: {
    myFun: {
      deps: [],
      exports: 'myFun'
    }
  },
  waitSeconds: 15
});
require(['module1', 'jquery', 'module2', 'myFun'], function (m1, j, m2, myFun) {
  j("#app").css('color', 'red');
  m1();
  m2();
});