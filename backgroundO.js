//console.log('background script running!');

var intervalID = setInterval(function(){
	//alert("Interval reached");
	//console.log('wait over');
	chrome.tabs.executeScript({file: "content_script.js", allFrames: true});
	//console.log('starting to wait');
}, 1000);
