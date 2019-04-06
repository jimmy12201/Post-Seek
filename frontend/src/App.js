import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
