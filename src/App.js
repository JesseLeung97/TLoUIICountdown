import React, { Component } from 'react';
import Countdown from './Countdown.js';
import particleEffect from './images/particleEffect_tripleLength.mp4';
import QuoteGenerator from './QuoteGenerator.js';
import About from './About.js';
import logo from './images/tlouiiwidelogo.png';
import background from './images/ellieBackgroundGradient1080pJPG.jpg';
import mobileBackground from './images/ellieMobileBackgroundOptimizedPNG.png';

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
      const sporeBackground = '<div></div>'
      var logoStyles = {
        height: '100px',
      };
      var backgroundStyles = {
        minWidth: '100vw',
        height: '100vh',
        background: 'url('+(mobileBackground)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        zIndex: '-1',
        position: 'absolute',
      };
    } else {
      var sporeBackground = <video id="particleEffect" width="100%" height="100%" muted autoPlay loop><source src={particleEffect} type="video/mp4" /></video>;
      var logoStyles = {
        height: '150px',
      };
      var backgroundStyles = {
        minWidth: '100vw',
        height: '100vh',
        background: 'url('+(background)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40% center',
        backgroundSize: 'cover',
        zIndex: '-1',
        position: 'absolute',
      };
    }
    return(
        <div className="App">
          <div id="backgroundImage" className="backgroundImageNoBlur" style={backgroundStyles}>
            
          </div>
          <div className="logo">
            <img id="logo" src={logo} style={logoStyles}/>
          </div>
          <div className="countdownTimer">
            <Countdown date={`${year}-06-19T00:00:00`} />
          </div>
          <div>{sporeBackground}</div>
          <div id="preorderLink"><a href="https://www.thelastofus.playstation.com/" target="_blank">PREORDER</a></div>
          <div id="quotes">
            <QuoteGenerator />
          </div>
          <div id="aboutOverlay">
            <About />
          </div>
          <div className="blackOverlay">
          </div>
        </div>
      );
    }
}

export default App;
