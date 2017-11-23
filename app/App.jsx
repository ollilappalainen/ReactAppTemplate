import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-main">
        </div>          
      </MuiThemeProvider>
    );
  }
}