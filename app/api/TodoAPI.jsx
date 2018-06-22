var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorege.setItem('todos', JSON.stringify(todos));
      return todos;

    }
  },
  getTodos: function () {
    var stringTodos = localStorege.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  }
};
