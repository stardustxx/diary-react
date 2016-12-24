import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import TextEditor from '../../Components/TextEditor/TextEditor';
import './NewNote.css'

class NewNote extends Component {

  constructor() {
    super();
    
    this.appBarLeftIcon = <IconButton><NavigationArrowBack /></IconButton>;
  }

  render() {
    return (
      <div className="NewNote">
        <Nav leftIcon={this.appBarLeftIcon} className="nav" />
        <div className="body">
          <h3>Editing Diary</h3>
          <div className="editor">
            <TextEditor />
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;