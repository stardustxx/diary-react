import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import {browserHistory} from 'react-router'
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import TextEditor from '../../Components/TextEditor/TextEditor';
import * as firebase from 'firebase';
import * as Utility from '../../Utility';
import './Note.css'

class Note extends Component {

  constructor() {
    super();
    
    this.state = {
      "diaryId": "",
      "contentData": null,
      "noteTitle": ""
    };

    this.noteTitleTextStyle = {
      "width": "100%"
    };

    this.noteTitle = "";
    this.contentData = null;

    this.appBarLeftIcon = <IconButton><NavigationArrowBack /></IconButton>;
  }

  componentDidMount() {
    if (this.props.hasOwnProperty("params") && this.props.params.id) {
      this.setState({
        "diaryId": this.props.params.id
      });
      this.getNoteData(this.props.params.id);
    }
  }

  getNoteData(refKey) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('Diary').child(Utility.convertEmail(user.email)).child(refKey).once("value").then((snapshot) => {
          let val = snapshot.val();
          if (val) {
            if (val.hasOwnProperty("contentData") && !val["contentData"].hasOwnProperty("entityMap")) {
              val["contentData"]["entityMap"] = {};
            }
            
            this.contentData = val.contentData;
            this.noteTitle = val.title;
            this.setState({
              "contentData": val.contentData,
              "noteTitle": val.title
            });
          } else {
            browserHistory.push("/home");
          }
        });
      }
    });
  }
  
  onNoteTitleChange = (event) => {
    this.noteTitle = event.target.value;
    this.setState({
      "noteTitle": this.noteTitle
    });
    this.saveContent();
  }

  onEditorContentChange = (contentData) => {
    this.contentData = contentData;
    this.saveContent();
  }

  saveContent = () => {
    let databaseRef;
    let currentUser = firebase.auth().currentUser;
    console.log(this.contentData);

    if (this.state.diaryId) {
      databaseRef = firebase.database().ref('Diary').child(Utility.convertEmail(currentUser.email)).child(this.state.diaryId);
    } else {
      databaseRef = firebase.database().ref('Diary').child(Utility.convertEmail(currentUser.email)).push();
      this.setState({
        "diaryId": databaseRef.key
      });
    }

    databaseRef.set({
      "email": currentUser.email,
      "title": this.noteTitle,
      "contentData": this.contentData
    }).then(() => {
      console.log("saved");
    }, (error) => {
      console.error('saving note error', error);
    });
  }

  render() {
    return (
      <div className="Note">
        <Nav leftIcon={this.appBarLeftIcon} className="nav" />
        <div className="body">
          <h3>Editing Diary</h3>
          <div className="editor">
            <TextField hintText="Title" style={this.noteTitleTextStyle} onChange={this.onNoteTitleChange} value={this.state.noteTitle} />
            <TextEditor onChange={this.onEditorContentChange} contentData={this.state.contentData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Note;