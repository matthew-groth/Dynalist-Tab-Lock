var option1 = {
	url: "https://dynalist.io/*"
};
var option2 = {
	title: "—" // this is for my own use - I am embedding Dynalist in another webpage
};

var resetInterval = 1000

// at every reset interval, search for every Dynalist tab and execute content_script in it

var intervalID = setInterval(function(){
	
	chrome.tabs.query(option1, function(tabArray1) {
		chrome.tabs.query(option2, function(tabArray2) {

			var both = tabArray1.concat(tabArray2);
			var arrayLength = both.length;
			for (var i = 0; i < arrayLength; i++) {
				
				// allFrames true so this works even if Dynalist is in an iFrame
				chrome.tabs.executeScript(both[i].id,{file: "content_script.js", allFrames: true});

			};
		});
	});
}, resetInterval);
