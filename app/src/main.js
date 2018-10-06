/*
  Этот файл служит для изначального связывания html и Vue, и регистрации компонентов.
  Как правило делать изменения здесь производятся редко, вся работа проходит во *.vue-файлах.
*/

var Vue = require('vue');
var App = require('./app.vue');
var TaskInput = require('./task-input.vue');

Vue.component('task-input', TaskInput);

/* Этот код вообще трогать не требуется, он просто запускает основной компонент приложения */
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
});