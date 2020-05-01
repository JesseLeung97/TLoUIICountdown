import React, { Component } from 'react';
import Countdown from './Countdown.js';
import particleEffect from './images/particleEffect_fadeToBlack.mp4';
import QuoteGenerator from './QuoteGenerator.js';
import About from './About.js';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
    return(
      <div className="App">
        <div id="backgroundImage">
          <div className="logo"></div>
          <div className="countdownTimer">
            <Countdown date={`${year}-06-19T00:00:00`} />
          </div>
          <div id="quotes">
            <QuoteGenerator />
          </div>
          <video id="particleEffect" width="100%" height="100%" muted autoPlay loop>
            <source src={particleEffect} type="video/mp4" />
          </video>
          <div id="aboutOverlay">
            <About />
          </div>
          <div className="blackOverlay">
          </div>

        </div>
      </div>
      
      )
  }
}

export default App;
