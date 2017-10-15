"use strict";

chrome.runtime.onMessage.addListener(function(req, sender, resp){
	if(req.com = 'show'){
		chrome.pageAction.show(sender.tab.id);
	}
});

// $(document).ready(main);  //while in debug don't call main() automatically

function main(){
	
	request.topic1 = ['Moroni', 'Alma', 'General Conference'];
	request.textarea1 = ['Text of Moroni 1', 'Text of Alma', 'From the Ensign'];
	
	$.post(uri.update, request, function(d){
		console.log(d);
	}, 'json');
	
}