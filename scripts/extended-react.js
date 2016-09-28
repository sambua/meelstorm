import React from 'react';

module.exports = function() {
  class ExtendedReact extends React.Component {

    state = {layout: []};

    onLayoutChange = (layout) => {
      this.setState({layout: layout});
    };
  }
}
