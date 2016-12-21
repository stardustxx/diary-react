import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import {browserHistory} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Home.css';
import * as firebase from 'firebase';
import DiaryList from '../../Components/DiaryList/DiaryList';

class Home extends Component {
  
  componentWillMount() {
    this.databaseRef = firebase.database().ref('items');
    // console.log('databaseRef', this.databaseRef);

    this.fabStyle = {
      'position': 'fixed',
      'right': '24px',
      'bottom': '24px'
    };
  }

  onFabClicked = (event) => {
    browserHistory.push("/new");
  }
  
  render() {
    return (
      <div className="Home">
        <Nav className="nav" />
        <div className="body">
          <DiaryList />
          <FloatingActionButton style={this.fabStyle} onClick={this.onFabClicked}>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default Home;