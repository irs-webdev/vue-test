/*
  Этот файл служит для изначального связывания html и Vue.
  Как правило делать изменения здесь не нужно, вся работа проходит во *.vue-файлах.
*/

var Vue = require('vue');
var App = require('./app.vue');

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
})