var React = require('react');
var Search = require('Search');

var TodoApp = React.createClass({

  render: function () {
    return(
      <div className='page-title'>
        <h2 className="page-title">Todo App</h2>
        <Search/>
      </div>
    );
  }
});







module.exports = TodoApp;
