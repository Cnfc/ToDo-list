var React = require('react');

var Search = React.createClass({

  render: function () {
    return(
      <div>
        <input type="#" placeholder="Search todos"></input>
        <checkout>Show completed todos</checkout>
      </div>
    )
  }

});

module.exports = Search;
