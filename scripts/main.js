var React = require('react');
import { render } from 'react-dom';
import { Router, Route, Link, History , browserHistory } from 'react-router';

// Components
const COMP_PATH = './components/';
import EditorBlock from COMP_PATH + 'EditorBlock';

const App = React.createClass({
  render : function () {
    return (
      <div className="container">
        <FormattingPanel />
        <div className="row">
          <EditorBlock />
          <SidePanel />
        </div>
      </div>
    );
  }
});

/*
 * Drog file container
 */
const SidePanel = React.createClass({
  render : function () {
    return (
      <div id="side-panel" className="col-xs-12 col-sm-3"><h2>Side Panel</h2></div>
    );
  }
});

/*
 * Title Component
 */
const DocumentTitle = React.createClass({
  render : function () {
    return (
      <div>
        <p>Here will be title of the Page</p>
      </div>
    );
  }
});


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
 * Formatting Pabel component
 */
const FormattingPanel = React.createClass({
  render : function () {
    return (
      <div className="row">
        <p> Here will be formatting panel </p>
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

render( router, document.getElementById('root') );
