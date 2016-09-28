var React = require('react');
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import FormattingPanel from './FormattingPanel';
import EditorBlock from './EditorBlock';
import dTextEditor from './dragables/dTextEditor.js'
var HTML5Backend = require('react-dnd-html5-backend');
var DragDropContext = require('react-dnd').DragDropContext;

const App = React.createClass({
  getInitialState: function () {
    return {
      currentDragItem: null
    };
  },

  render : function () {
    return (
      <div className="container">
        <FormattingPanel />
        <div className="row">
          <div className="col-sm-9 col-xs-12">
            <EditorBlock/>
          </div>
          <div className="col-sm-3 col-xs-12">
            <SideBar />
          </div>
        </div>
      </div>
    );
  },

  onDrop: function(target) {
    return this.setState({
      lastDrop: {
        source: this.state.currentDragItem,
        target: target
      }
    });
  },

  onDragStart: function(details) {
    return this.setState({
      currentDragItem: details
    });
  },

  onDragStop: function() {
    return this.setState({
      currentDragItem: null
    });
  }
});

export default DragDropContext(HTML5Backend)(App);
