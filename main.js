"use strict";

var uri = {
	update: 'https://presentation-maker.herokuapp.com/saved/', //requires talkname after trailing slash
	create: 'https://presentation-maker.herokuapp.com/' //requires a talkname after trailing slash
};

var request = {
	user: 'Ethan',
	talk_name: 'Brave',
	topic1: '',
	textarea1: ''
};

// $(document).ready(main);  //while in debug don't call main() automatically

function main(){
	
	request.topic1 = ['Moroni', 'Alma', 'General Conference'];
	request.textarea1 = ['Text of Moroni 1', 'Text of Alma', 'From the Ensign'];
	
	$.post(uri.update, request, function(d){
		console.log(d);
	}, 'json');
	
}