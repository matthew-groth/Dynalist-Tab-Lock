// Created by Matt Groth
// Last updated 2/12/17

// console.log('background script running!');

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

while(true) {
    console.log('starting to wait');
    wait(100);
    console.log('wait over');
    chrome.tabs.executeScript({file: "content_script.js"});
}
