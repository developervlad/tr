import React, { PropTypes } from 'react';
import Header from './common/Header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App({ children }) {

    console.log('HELLfghfghO');

  return (
    <MuiThemeProvider><div className="container">
      <Header />
      {children}
    </div>
    </MuiThemeProvider>
  );
}

App.propTypes = { children: PropTypes.object };


export default App;
