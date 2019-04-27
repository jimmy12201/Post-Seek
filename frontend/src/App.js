import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <HomeComponent history={this.props.history}/>
      </div>
    );
  }
}

export default App;
