var React = require('react');
import { render } from 'react-dom';
import { Router, Route, Link, History , browserHistory } from 'react-router';

// Components
import App from './components/App';
import EditorBlock from './components/EditorBlock';
import dTarget from './components/dTarget'
import DocumentTitle from './components/DocumentTitle';

/*
 * Terms Component
 */
const DocumetTerms = React.createClass({
  render : function () {
    return (
      <div>
        <p>Here will be terms of the Page</p>
      </div>
    );
  }
});


/*
 * MainBlock
 */
const MainBlock = React.createClass({
  render : function () {
    return (
      <div id="main-block">
      </div>
    );
  }
})

/*
 * Nof Found
 */
const NotFound = React.createClass({
  render : function() {
    return <h1>Not Found !</h1>
  }
});

/*
 * Routes
 */
var router = (
  <Router history={browserHistory} >
    <Route path='/' component={App} />
    <Route path='/title' component={DocumentTitle} />
    <Route path='/terms' component={DocumetTerms} />
    <Route path='*' component={NotFound} />
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  const contentDiv = document.getElementById('root');
  render( router, contentDiv );
});
