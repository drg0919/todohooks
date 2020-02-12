import React from 'react';
import {Navbar,NavbarGroup,NavbarHeading,Icon} from '@blueprintjs/core';
import Todo from './Todo';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar style={{backgroundColor: 'green'}} fixedToTop={true}>
        <NavbarGroup align="left">
          <Icon icon="clipboard" color="white" iconSize="20px" style={{margin:'0 12px'}}/>
          <NavbarHeading style={{color: 'white'}}><h2>Todo List</h2></NavbarHeading>
        </NavbarGroup>
      </Navbar>
      <Todo />
    </div>
  );
}

export default App;
