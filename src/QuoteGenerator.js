import React, { Component } from 'react';

class QuoteGenerator extends Component {
	
	constructor(props) {
    	super(props)
    	this.state = {
      		display: "",
      		preload: true,
      		quotes: [ 
      		"Endure and survive.", 
      		"It can't be for nothing.", 
      		"Everyone I have ever cared for has either died or left me.  Everyone...fucking except for you.",
      		"We can be all poetic and lose our minds together.",
      		"We are survivors.",
      		"I shot the hell out of that guy, huh?",
      		"...Okay...",
      		"No matter what, you keep finding something to fight for.",
      		"Drugs.  I sell hardcore drugs.",
      		"If I get in trouble down there, you make every shot count.",
      		"You'd just come after her.",
      		"I got you, baby girl.",
      		"When you're lost in the darkness, look for the light.",
      		"Why are these pages stuck together?",
      		"It's the normal people that scare me.",
      		"How is it that you're never scared?",
      		"So don't tell me I would be safer with somebody else, because the truth is, I would just be more scared.",
      		"Everything happens for a reason.",
      		"And just so we're clear about back there, it was either him or me.",
      		"It's called luck, and it is gonna run out.",
      		"I'm gonna find, and I'm gonna kill, every last one of them.",
      		"Brick. Fucking. Master!",
      		"My vote? Let's just wait it out."
      		],
    	};
  	}

  	componentDidMount() {
    	this.timer = setInterval(() => {
    		this.setState({ 
    			display: this.pickQuote(),
    			preload: false,
    		});
    	}, 9000)
  	}

	pickQuote(){
		var randomNum = Math.floor(Math.random() * (this.state.quotes.length));
		return this.state.quotes[randomNum]
	}

	render(){
		if(this.state.preload){
			return(
				<div></div>
			);		
		} else {
			return(
				<div id="quoteContainerID" className="quoteContainer">
					<p className="shownQuote">"{this.state.display}"</p>
				</div>
			);
		}
	}
}

export default QuoteGenerator
