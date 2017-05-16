import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App(props) {




  return (
    <MuiThemeProvider><div className="container">
      <Header store={props.route.store} actions={props.route.actions}/>
      {props.children}
    </div>
    </MuiThemeProvider>
  );
}

App.propTypes = { children: PropTypes.object };


export default connect((state)=>{return state})(App);
