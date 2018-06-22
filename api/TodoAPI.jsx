var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorege.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: function () {

  }
};
