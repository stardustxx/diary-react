import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Editor, EditorState, RichUtils, convertFromRaw, convertToRaw} from 'draft-js';

class TextEditor extends Component {

  constructor(props) {
    super(props);

    let editorContent;
    if (this.props.contentData) {
      editorContent = convertFromRaw(this.props.contentData);
    }

    this.state = {
      editorState: editorContent ? EditorState.createWithContent(editorContent) : EditorState.createEmpty()
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.contentData) {
      this.setState({
        editorState: EditorState.createWithContent(convertFromRaw(nextProps.contentData))
      });
    }
  }
  
  onEditorContentChange = (editorState) => {
    this.setState({editorState});
    this.props.onChange(convertToRaw(editorState.getCurrentContent()));
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
          handleKeyCommand={this.handleKeyCommand}
          />
      </div>
    );
  }
}

export default TextEditor;