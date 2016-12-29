import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


import ComplaintsIndex from './complaints_index';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

export default class App extends Component {

  render() {
    return (
      <div>
          <MuiThemeProvider>
              <Toolbar>
                <ToolbarTitle text="Customer Complaints" /> 
                <ToolbarGroup>
                  <RaisedButton label="Complaints" primary={true} />
                  <RaisedButton label="Reports" primary={true} />
                </ToolbarGroup>              
              </Toolbar> 
          </MuiThemeProvider>
          <MuiThemeProvider>
            {this.props.children}
          </MuiThemeProvider>  
      </div>
    );
  }
}
