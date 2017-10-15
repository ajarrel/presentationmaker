var obj = { //this object is only build for scripture content from LDS.org
	topic1: $('h1').first().text(),
	textarea1: $('p.highlight').text()
};

chrome.runtime.onMessage.addListener(function(request, sender, response){
	
	if(request.com = 'get_content'){
		response(obj);
	}
	
});

chrome.runtime.sendMessage({com: 'show'});