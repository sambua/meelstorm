import React from 'react';
import ItemTypes from '../../Constants';
var DragSource = require('react-dnd').DragSource;
var PropTypes = React.PropTypes;

var footerSource = {
  beginDrag: function(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const DFooter = React.createClass({
  propTypes: {
    inSideBar: PropTypes.bool,
    shouldBeSingle: PropTypes.bool
  },
  render: function() {
    var single = this.props.shouldBeSingle;
    var moved = this.props.inSideBar;
    var hidden = single && moved ? 'hidden': '';
    return (
      <div className="has-border {{hidden}}">
        <p> Here will be footer block </p>
      </div>
    );
  }
});

export default DragSource(ItemTypes.TEXT_EDITOR, footerSource, collect )(DFooter);
