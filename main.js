"use strict";

chrome.runtime.onMessage.addListener(function(req, sender, resp){
	if(req.com = 'show'){
		console.log('background got request to show');
		chrome.pageAction.show(sender.tab.id);
	}
});