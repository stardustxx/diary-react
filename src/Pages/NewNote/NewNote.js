import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Subheader from 'material-ui/Subheader';
import {Editor, EditorState} from 'draft-js';
import './NewNote.css'

class NewNote extends Component {

  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.appBarLeftIcon = <IconButton><NavigationArrowBack /></IconButton>;
  }

  onEditorContentChange = (editorState) => {
    this.setState({editorState})
  };

  render() {
    return (
      <div className="NewNote">
        <Nav leftIcon={this.appBarLeftIcon} className="nav" />
        <div className="body">
          <Subheader>Editing Diary</Subheader>
          <div className="editor">
            <Editor
              editorState={this.state.editorState}
              onChange={this.onEditorContentChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;