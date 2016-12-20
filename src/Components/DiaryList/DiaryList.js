import React, {Component} from 'react';
import DiaryItem from './DiaryItem/DiaryItem';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class DiaryList extends Component {
  
  constructor() {
    super();
    this.state = {
      test: []
    };
  }

  componentWillMount() {
    for (let i = 0; i < 10; i++) {
      this.setState((prevState) => {
        prevState.test.push({
          id: i,
          title: `Hey ${i}`,
          content: <p>Sup</p>
        });
      });
    }
  }
  
  render() {
    return (
      <div>
        <List>
          <Subheader>Diary</Subheader>
          {
            this.state.test.map((value) => {
              return <DiaryItem key={value.id} title={value.title} content={value.content} />
            })
          }
        </List>
      </div>
    );
  }
}

export default DiaryList;