import React from 'react';
import ReactDOM from 'react-dom';

// Responsive Grid Layout
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

const EditorBlock = React.createClass({
  getLayouts: function (){
    return [
      {i: 'a', x: 0, y: 0, w:1 , h: 2, static: true},
      {i: 'b', x: 1, y: 0, w:3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 1, y: 0, w:2, h:1}
    ];
  },
  render: function () {
    // {lg: layout1, md: layout2, ...}
    let layouts = this.getLayouts;
    return (
      <div id="editor-block" className="col-sm-9 col-xs-12">
        <p> Main text editor block</p>
        <ResponsiveReactGridLayout className="layout" layouts={layouts} breakpoints={{lg: 1200, md: 996, sm: 768, xs:480, xxx:0}} cols={{lg:12, md:10, sm: 6, xs: 4, xxs: 2}} >
          <div key={"1"}>1</div>
          <div key={"2"}>2</div>
          <div key={"3"}>3</div>
        </ResponsiveReactGridLayout >
      </div>
    )
  }
})


export default EditorBlock;
