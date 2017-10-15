"use strict";

var uri = {
	update: 'https://presentation-maker.herokuapp.com/saved/', //requires talkname after trailing slash
	create: 'https://presentation-maker.herokuapp.com/' //requires a talkname after trailing slash
};

var request = { //default request
	user: 'Ethan',
	talk_name: 'Brave',
	topic1: '',
	textarea1: ''
};

$(document).ready(main); //once DOM is ready, run this function

function main(){
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //get active tab
		chrome.tabs.sendMessage(tabs[0].id, {com: 'get_content'}, function(r){ //send message to the content script, function(r) is the callback handler
			
			request.topic1 = r.topic1;
			request.textarea1 = r.textarea1;
			
			$(document.createElement('h1')).text(r.topic1).appendTo('body');
			$(document.createElement('div')).text(r.textarea1).appendTo('body');
			
			$(document.createElement('div'))
				.addClass('button')
				.text('Push to Presentation Maker?')
				.attr('id','confirm')
				.click(pushToCloud)
				.appendTo('body');
			
		});
	});
}

function pushToCloud(){
	
	$.post(uri.update + request.talk_name, request, function(resp){
		console.log(resp);
	}, 'json').then(function(){ $('.button').add('h1').add('div').fadeOut(); });
}