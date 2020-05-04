import React, { Component } from 'react';
import Countdown from './Countdown.js';
import particleEffect from './images/particleEffect_tripleLength.mp4';
import QuoteGenerator from './QuoteGenerator.js';
import About from './About.js';
import logo from './images/tlouiiwidelogo.png';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isMobile: true,
      videoSource: "",
    }
  }

  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    if(window.innerWidth <= 414 && window.innerHeight <= 896){
      return(
        <div className="App">
          <div id="backgroundImage" className="backgroundImageNoBlur"></div>
          <div className="logo">
            <img id="logo" src={logo} alt="logo" height="150px" />
          </div>
          <div className="countdownTimer">
            <Countdown date={`${year}-06-19T00:00:00`} />
          </div>
          <div id="preorderLink"><a href="https://www.thelastofus.playstation.com/">PREORDER</a></div>
          <div id="quotes">
            <QuoteGenerator />
          </div>
          <div id="aboutOverlay">
            <About />
          </div>
          <div className="blackOverlay">
          </div>
        </div>
      
      )
    } else {
      return(
        <div className="App">
          <div id="backgroundImage" className="backgroundImageNoBlur"></div>
          <div className="logo">
            <img id="logo" src={logo} alt="logo" height="150px" />
          </div>
          <div className="countdownTimer">
            <Countdown date={`${year}-06-19T00:00:00`} />
          </div>
          <video id="particleEffect" width="100%" height="100%" muted autoPlay loop>
            <source src={particleEffect} type="video/mp4" />
          </video>
          <div id="preorderLink"><a href="https://www.thelastofus.playstation.com/">PREORDER</a></div>
          <div id="quotes">
            <QuoteGenerator />
          </div>
          <div id="aboutOverlay">
            <About />
          </div>
          <div className="blackOverlay">
          </div>
        </div>
      )
    }
  }
}

export default App;
