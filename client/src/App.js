import React, { Component } from 'react';
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

