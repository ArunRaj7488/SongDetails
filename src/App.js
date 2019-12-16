import React, { Component } from 'react';

import {Route, Switch} from "react-router-dom"

//import Table11 from './componants/table'
import Song from './componants/song'

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       <Song />
      </div>
    );
  }
}

export default App;
