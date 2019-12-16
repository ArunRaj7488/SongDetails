import React, { Component } from 'react';

import {Route, Switch} from "react-router-dom"
import DrawerForm from './componants/music'
import Table11 from './componants/table'
import Check from './componants/check'

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       <Check />
      </div>
    );
  }
}

export default App;
