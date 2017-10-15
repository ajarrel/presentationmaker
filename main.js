"use strict";

var uri = {
	update: 'https://presentation-maker.herokuapp.com/saved/', //requires talkname after trailing slash
	create: 'https://presentation-maker.herokuapp.com/' //requires a talkname after trailing slash
};

var request = {
	user: 'Ethan',
	talk_name: 'Charity',
	topic1: '',
	textarea1: ''
};

$(document).ready(main);

function main(){
	$.post(uri.update, request, function(d){
		console.log(d);
	}, 'json');
}