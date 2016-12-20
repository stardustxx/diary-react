import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
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

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar/>
          <Home/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;