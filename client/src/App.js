import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main.jsx';
import Search from './components/Search.jsx';
import Header from './components/Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
       <Main>
        <Header />
        <Search />
       </Main>
      </div>  
    );
  }
}

