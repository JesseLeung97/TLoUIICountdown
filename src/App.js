import React, { Component } from 'react';
import Countdown from './Countdown.js'

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return(
      <div className="App">
        <div className="countdownTimer">
          <Countdown date={`${year}-06-19T00:00:00`} />
        </div>
      </div>
      
      )
  }
}

export default App;
