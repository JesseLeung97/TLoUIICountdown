import React, { Component } from 'react';

class About extends Component{

	constructor(props){
		super(props);
		this.state = {
			aboutPageVisible: false,
			preload: true,
			aboutText: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.",
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
						<h2 id="aboutMessageTitle"> About </h2>
						<p id="aboutMessage">{this.state.aboutText}</p>
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