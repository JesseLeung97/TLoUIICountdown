import React, { Component } from 'react';
import Countdown from './Countdown.js'
import logo from './logo.svg';
import Background from './ellieBackground.png';

var sectionStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`
}

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return(
      <div style={sectionStyle} className="background">
      <div className="App">
        <div className="countdownTimer">
          <Countdown date={`${year}-06-19T00:00:00`} />
        </div>
      </div>
      </div>
      
      )
  }
}

export default App;
