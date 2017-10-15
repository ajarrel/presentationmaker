"use strict";

$(document).ready(main);

function main(){
	$('#pushpresent').click(pushToCloud);
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {com: 'get_content'}, function(r){
			$('#target').text(r);
		});
	});
}

function pushToCloud(){
	console.log('fired');
}