import React from 'react';
import './App.css';
import { Header, menuItems } from './Header.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-Content">
          {menuItems.map(m => <Route key={'menu_link_'+m.name} path={m.path} exact component={m.component} />)}
        </div>
      </div>
    </Router>
  );
}

export default App;
