import React from 'react';
import ReactDOM from 'react-dom';
import DTextEditor from './dragables/DTextEditor';
import DFooter from './dragables/DFooter';
var DragSource = require('react-dnd').DragSource;

var Types = {
  BLOCK_ITEM: 'block-item'
};

console.log(DFooter);

const SideBar = React.createClass({
  render : function () {
    return (
      <div id="side-panel" className=""><h2>Side Panel</h2>
        {this.props.children}
        <DTextEditor />
        <DFooter inSideBar shouldBeSingle />
      </div>
    );
  }
});

export default SideBar;
