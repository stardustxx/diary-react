import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar title="Diary" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </div>
    );
  }
}

export default NavBar;