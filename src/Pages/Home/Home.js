import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import {browserHistory} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Home.css';
import * as firebase from 'firebase';
import * as Utility from '../../Utility';
import DiaryList from '../../Components/DiaryList/DiaryList';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "diaries": []
    };
  }
    
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.databaseDiaryRef = firebase.database().ref('Diary').child(Utility.convertEmail(user.email));
        this.databaseDiaryRef.on('value', this.onDiaryChange);
      }
    });
    
    this.fabStyle = {
      'position': 'fixed',
      'right': '24px',
      'bottom': '24px'
    };
  }

  onDiaryChange = (snapshot) => {
    let val = snapshot.val();
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        let obj = val[key];
        if (obj.hasOwnProperty("contentData") && !obj["contentData"].hasOwnProperty("entityMap")) {
          obj["contentData"]["entityMap"] = {};
        }
      }
    }
    this.setState({
      "diaries": val
    });
  }

  componentWillUnmount() {
    if (this.databaseDiaryRef) {
      this.databaseDiaryRef.off('value', this.onDiaryChange);
    }
  }

  onFabClicked = (event) => {
    browserHistory.push("/note");
  }

  onDiaryItemTap = (data) => {
    browserHistory.push(`/note/${data.refKey}`);
  }
  
  render() {
    return (
      <div className="Home">
        <Nav className="nav" />
        <div className="body">
          <DiaryList diaryList={this.state.diaries} onItemTap={this.onDiaryItemTap} />
          <FloatingActionButton style={this.fabStyle} onTouchTap={this.onFabClicked}>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default Home;