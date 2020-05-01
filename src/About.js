import React, { Component } from 'react';

class About extends Component{

	constructor(props){
		super(props);
		this.state = {
			aboutPageVisible: false,
			aboutText: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.",
		};
		this.handleClick = this.handleClick.bind(this);
		this.aboutPage = React.createRef();
	}

	handleClick() {
		this.setState(state => ({
			aboutPageVisible: !state.aboutPageVisible
		}));
		document.getElementById('backgroundImage').classList.add('backgroundImageBlur');
	}

	render() {
		if(this.state.aboutPageVisible){
			return (
				<div>
					<div className="aboutCenterMessage" onClick={this.handleClick}>
						<h2 id="aboutMessageTitle"> About </h2>
						<p id="aboutMessage">{this.state.aboutText}</p>
					</div>
					<div className="aboutOverlay" onClick={this.handleClick}></div>
				</div>
				);
		} else {
			return (
				<div>
					<button id="toggleButton" onClick={this.handleClick}>
						about
					</button>
					<div className="noAboutCenterMessage"></div>
					<div className="noAboutOverlay"></div>
				</div>
				
				);
		}
	}	
}

export default About