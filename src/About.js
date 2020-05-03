import React, { Component } from 'react';

class About extends Component{

	constructor(props){
		super(props);
		this.state = {
			aboutPageVisible: false,
			preload: true,
			aboutText1: `Thank you for visiting my unofficial countdown to the release of The Last of Us Part II.  
			This project was created in anticipation for the next iteration in the story of Joel and Ellie.  
			In such disheartening times, know that just as a tree weathers even the stormiest 
			of nights, this community too will endure and survive.`,
			aboutText2: `This site was written in the React framework for Javascript.  Videos and images were edited 
			in the Adobe suite and animations are CSS triggered by Javascript.  
			There are 50 quotes included from Part I, Left Behind, and the Part II trailers.`,
			aboutText3: `I owe the utmost gratitude to Kastat for his tireless guidance in navigating the expanse of 
			CSS and for his excitement and encouragement throughout the project’s conception.  Likewise, I’m grateful 
			for all of those at Naughty Dog who have poured their soul into creating and sharing unforgettable 
			experiences.`,
			aboutText4: `After all we've been through.  Everything that I've done.  It can't be for nothing.`,
		};
		this.handleClick = this.handleClick.bind(this);
		this.aboutPage = React.createRef();
	}

	handleClick() {
		this.setState(state => ({
			aboutPageVisible: !state.aboutPageVisible,
			preload: false,
		}));
		document.getElementById('backgroundImage').classList.toggle('backgroundImageBlur');
		document.getElementById('CountdownContainer').classList.toggle('Countdown-col-darken');
		document.getElementById('quoteContainerID').classList.toggle('quote-container-darken');
		document.getElementById('toggleButton').classList.toggle('buttonIsSelected');
		
	}

	render() {
		if(!this.state.aboutPageVisible && this.state.preload){
			return (
				<div className="aboutOverlayContainer">
					<button id="toggleButton" onClick={this.handleClick}>
						ABOUT
					</button>
					<div id="aboutHidden" className="noAboutCenterMessage" className="aboutPreload">
					</div>
					<div id="aboutOverlayHidden" className="noAboutOverlay" className="aboutPreload"></div>
				</div>				
				);
		} else if(this.state.aboutPageVisible){
			return (
				<div className="aboutOverlayContainer">
					<button id="toggleButton" onClick={this.handleClick}>
						ABOUT
					</button>
					<div className="aboutCenterMessage" onClick={this.handleClick}>
						<div id="aboutMessage">
							<p>{this.state.aboutText1}</p>
							<p>{this.state.aboutText2}</p>
							<p>{this.state.aboutText3}</p>
							<p>{this.state.aboutText4}</p>
						</div>
					</div>
					<div className="aboutOverlay" onClick={this.handleClick}></div>
				</div>
				);
		} else {
			return (
				<div className="aboutOverlayContainer">
					<button id="toggleButton" onClick={this.handleClick}>
						ABOUT
					</button>
					<div id="aboutHidden" className="noAboutCenterMessage">
					</div>
					<div id="aboutOverlayHidden" className="noAboutOverlay"></div>
				</div>				
				);
		}
	}	
}

export default About