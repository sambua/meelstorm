import React from 'react';
import ReactDOM from 'react-dom';

const DTarget = React.createClass({
  render: function () {
    let i, target;
    return div({
      className: 'dnd-drop-targets',
      children: (function (){
      }).call(this)
    });
  },
  targets: function () {
    return [
      {accepts: []}
    ]
  }
});

export default DTarget;
