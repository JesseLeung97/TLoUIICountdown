import React, { Component } from 'react';

class QuoteGenerator extends Component {
	
	constructor(props) {
    	super(props)
    	this.state = {
      		display: "",
      		index: 0,
      		quotes: [ "Endure and survive.", "It can't be for nothing.", 
      		"Everyone I have ever cared for has either died or left me.  Everyone...fucking except for you.",
      		"We can be all poetic and lose our minds together.", "We are survivors.", "I shot the hell out of that guy, huh?",
      		"...Okay...", "No matter what, you keep finding something to fight for.", "Drugs.  I sell hardcore drugs.",
      		"If I get in trouble down there, you make every shot count.", "You'd just come after her.", "I got you, Baby Girl.",
      		"When you're lost in the darkness, look for the light.", "Why are these pages stuck together?",
      		"It's the normal people that scare me.", "How is it that you're never scared?"
      		],
    	}
  	}

  	componentDidMount() {
    	this.timer = setInterval(() => {
    		if(this.index == 0){
    			this.refs.shownQuote.classList.remove('quotesHide');
      			this.refs.shownQuote.classList.add('quotesShow');
      			this.index = 1;
    		} else {
    			this.refs.shownQuote.classList.remove('quotesShow');
    			this.refs.shownQuote.classList.add('quotesHide');
    			this.index = 0;
    		}
    		this.setState({ display: this.pickQuote()});
    	}, 5000)
  	}

  	componentWillUnmounnt() {
    	clearInterval(this.timer);
  	}

	pickQuote(){
		var randomNum = Math.floor(Math.random() * (this.state.quotes.length));
		return this.state.quotes[randomNum]
	}

	render(){
		return(
			<p ref="shownQuote">{this.state.display}</p>
			)
	}
}

export default QuoteGenerator
