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
      		"My vote? Let's just wait it out.",
          "After Years Of Wandering In Circles, We’re About To Come Home, Make A Difference, And Bring The Human Race Back Into Control Of Its Own Destiny.",
          "Tell them that Ellie is the little girl that broke your fucking finger!",
          "I know, step on the fucking pallet.",
          "Well, Skeleseer can suck my dick.",
          "Let go of me you chickenshit!",
          "You are treading on some mighty thin ice here.",
          "I'm scared of ending up alone.",
          "Get up, get up.  You gotta tell me what to do.  You gotta get up...Joel?",
          "I swear to god.  I get you out of this, you're so singing for me.",
          "Holy shit, Joel.",
          "Clip her wings.",
          "I have a very serious question for you.  How bad do I smell?",
          "I'm...just a girl.  Not a threat.",
          "Oh Ellie, I think they should be terrified of you.",
          "So fucking cool.",
          "Guess what, we're shitty people Joel.  It's been that way for a long time.",
          "Look, there's enough here that you have to feel some sort of obligation to me.",
          "I will not turn into one of those things.",
          "No, just go!  Just...fucking go.",
          "Once upon a time, I had somebody that I cared about.  And in this world, that sort of shit's good for one thing: Gettin' you killed.",
          "I've been on quite the adventure, little brother.",
          "You have no idea what loss is.",
          "I swear.",
          "Don't waste this gift, Joel.",
          "What kind of name is Callus, anyways?",
          "I guess no matter how hard you try, you can't escape your past.",
          "It's got its ups and down.  You can't deny the view though."
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
				<div id="quoteContainerID" className="quoteContainer">
        </div>
			);		
		} else {
			return(
				<div id="quoteContainerID" className="quoteContainer">
					<h2 className="shownQuote">"{this.state.display}"</h2>
				</div>
			);
		}
	}
}

export default QuoteGenerator
