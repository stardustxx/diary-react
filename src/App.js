import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Note from './Pages/Note/Note';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

  constructor(props) {
    super(props);
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyDdfO1VRj3YtcOemd_T5nIo0GfWyyZeWXM",
      authDomain: "diary-865d9.firebaseapp.com",
      databaseURL: "https://diary-865d9.firebaseio.com",
      storageBucket: "diary-865d9.appspot.com",
      messagingSenderId: "929992010029"
    };
    firebase.initializeApp(config);
    injectTapEventPlugin();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        browserHistory.push("/login");
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/note" component={Note} />
            <Route path="/note/:id" component={Note} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;