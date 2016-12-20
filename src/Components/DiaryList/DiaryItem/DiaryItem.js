import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';

class DiaryList extends Component {
  render() {

    let diaryTitle = this.props.title;
    let diaryContentSnippet = this.props.content;

    return (
      <div>
        <ListItem
          primaryText={diaryTitle}
          secondaryText={diaryContentSnippet}
          secondaryTextLines={2}
        />
      </div>
    );
  }
}

export default DiaryList;