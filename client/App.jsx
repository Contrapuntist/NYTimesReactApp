import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Search from './components/Search.jsx';

export default class App extends Component {
  render() {
    return (
      // <div style={{textAlign: 'center'}}>
      //   <h1>Hello World</h1>

      // </div>
      <div>
       <Main> 
         <Search />
       </Main>
      </div>  
    );



  }
}