import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Editor, EditorState, RichUtils} from 'draft-js';

class TextEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  
  onEditorContentChange = (editorState) => {
    this.setState({editorState})
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onEditorContentChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick = () => {
    this.onEditorContentChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div className='TextEditor'>
        <FlatButton label="B" onClick={this._onBoldClick} />
        <Editor
          editorState={this.state.editorState}
          onChange={this.onEditorContentChange}
          handleKeyCommand={this.handleKeyCommand}/>
      </div>
    );
  }
}

export default TextEditor;