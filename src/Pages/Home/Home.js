import React, {Component} from 'react';
import * as firebase from 'firebase';
import DiaryList from '../../Components/DiaryList/DiaryList';

class Home extends Component {
  
  componentWillMount() {
    this.databaseRef = firebase.database().ref('items');
    // console.log('databaseRef', this.databaseRef);
  }
  
  render() {
    return (
      <div>
        <DiaryList />
      </div>
    );
  }
}

export default Home;