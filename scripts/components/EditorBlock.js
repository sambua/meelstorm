import React from 'react';

// Responsive Grid Layout
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

const EditorBlock = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg:12, md: 9, sm: 6, xs: 12, xxs: 12},
      rowHeight: 20
    }
  },

  getInitialState() {
    return {
      items: [0, 1, 2, 3, 4].map(function(i, key, list){
        return {i: i.toString(), x: i*2, y: 0, w: 2, h:2, add: i === (list.length - 1).toString()};
      }),
      newCounter: 0
    };
  },

  createElement(el){
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    var i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        { el.add ?
            <span className='add text' onClick={this.onAddItem} title="You can add an item by clicking here"> Add + </span>
          : <span className="text">{i}</span>}
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
      </div>
    );
  },

  onAddItem() {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add new item. Item must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.lenght * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2, h: 2
      }),
      // Increment the counter to ensure key is always unique
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreackpointChange(breakpoint, cols){
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  },

  onRemoveItem(i){
    console.log('removing' + i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render(){
    return (
      <div>
        <ResponsiveReactGridLayout /*onLayoutChange={this.onLayoutChange}*/ onBreackpointChange={this.onBreakpointChange}
          {...this.props}>
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
        <button onClick={this.onAddItem}> Add Item </button>
      </div>
    );
  }
});

export default EditorBlock;

//if (require.main === module) {
//  require('../test-hook.jsx')(module.exports);
//}
