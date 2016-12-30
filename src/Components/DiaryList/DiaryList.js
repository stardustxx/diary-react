import React, {Component} from 'react';
import DiaryItem from './DiaryItem/DiaryItem';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {convertFromRaw} from 'draft-js';

class DiaryList extends Component {
  
  populateDiary = () => {
    let diaryListArray = [];
    for (let key in this.props.diaryList) {
      if (this.props.diaryList.hasOwnProperty(key)) {
        this.props.diaryList[key]["refKey"] = key;
        diaryListArray.push(this.props.diaryList[key]);
      }
    }
    if (diaryListArray.length) {
      return diaryListArray.map((value, index) => {
        value.plainText = value.hasOwnProperty("contentData") ? convertFromRaw(value.contentData).getPlainText() : "";
        return (
          <div key={value.refKey} >
            {index !== 0 && <Divider inset={false} />}
            <DiaryItem data={value} title={value.title} content={value.plainText} onItemTap={this.props.onItemTap} />
          </div>
        )
      });
    }
    return null;
  }
  
  render() {
    return (
      <div>
        <List>
          <Subheader>Diary</Subheader>
          {this.populateDiary()}
        </List>
      </div>
    );
  }
}

export default DiaryList;