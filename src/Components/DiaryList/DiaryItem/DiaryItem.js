import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';

class DiaryList extends Component {

  onItemTap = (event) => {
    this.props.onItemTap(this.props.data);
  }

  render() {

    let diaryTitle = this.props.title;
    let diaryContentSnippet = this.props.content;

    return (
      <div>
        <ListItem
          primaryText={diaryTitle}
          secondaryText={diaryContentSnippet}
          secondaryTextLines={2}
          onTouchTap={this.onItemTap}
        />
      </div>
    );
  }
}

export default DiaryList;