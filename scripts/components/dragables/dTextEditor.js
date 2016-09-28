import React from 'react';
import ReactDOM from 'react-dom';
var PropTypes = React.PropTypes;

const DTextEditor = React.createClass({
  getInitialState: function () {
    return {
      mouseDown: false,
      dragging: false
    };
  },
  render: function() {
    return (
      <div id='d-text-editor' className="has-border" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        <p> It is a text editor </p>
      </div>
    );
  },
  onMouseMove: function(event){
    var deltaX, deltaY, distance, _base, _base1;
    deltaX = event.pageX - this.state.originX;
    deltaY = event.pageY - this.state.originY;
    distance = Math.abs(deltaX) + Math.abs(deltaY);
    if(!this.state.dragging && distance > 3) {  // DRAG_THRESHOLD
      this.setState({
        dragging: true
      });
      if (typeof (_base = this.props).onDragStart == 'function') {
        _base.onDragStart(typeof (_base1 = this.props).dragData === "function" ? _base1.dragData() : void 0);
      }
    }
    if(this.state.dragging) {
      return this.setState({
        left: this.state.elementX + deltaX,
        top: this.state.elementY + deltaY
      });
    }
  },
  onMouseDown : function (event) {
    var pageOffset;
    if(event.button == 0 ){  // 0 means left button
      event.stopPropagation();
      this.addEvents();
      pageOffset = ReactDOM.findDOMNode(this).getBoundingClientRect();
      console.log();
      return this.setState({
        mouseDown: true,
        originX: event.pageX,
        originY: event.pageY,
        elementX: pageOffset.left,
        elementY: pageOffset.top
      });
    }
  },
  onMouseUp: function(){
    if( this.state.dragging ) {
      this.removeEvents();
      this.props.onDragStop();
      return this.setState({
        dragging: false
      });
    }
  },
  addEvents: function() {
    document.addEventListener('mousemove', this.onMouseMove);
    return document.addEventListener('mouseup', this.onMouseUp);
  },
  removeEvents: function() {
    document.removeEventListener('mousemove', this.onMouseMove);
    return document.removeEventListener('mouseup', this.onMouseUp);
  }
});

export default DTextEditor;
