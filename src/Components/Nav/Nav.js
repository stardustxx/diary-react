import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {browserHistory} from 'react-router'
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      isDrawerOpen: false
    };

    // this.drawerContainerStyle = {
    //   'top': '64px'
    // };
  }

  onLeftIconTouched = () => {
    // this.setState((prevState) => {
    //   return {
    //     isDrawerOpen: !prevState.isDrawerOpen
    //   }
    // });
    if (this.props.leftIcon) {
      browserHistory.push("/");
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Diary"
          iconElementLeft={this.props.leftIcon}
          showMenuIconButton={this.props.leftIcon ? true : false}
          onLeftIconButtonTouchTap={this.onLeftIconTouched}
          />
        
      {/*
        <AppBar
          title="Diary"
          iconElementLeft={<IconButton><NavigationArrowBack/></IconButton>}
          onLeftIconButtonTouchTap={this.onLeftIconTouched}
          />
        <Drawer
          open={this.state.isDrawerOpen}
          containerStyle={this.drawerContainerStyle}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      */}
      </div>
    );
  }
}

export default Nav;