// Created by Matt Groth
// Last updated 2/12/17

//console.log('content script running - node-links should open new tabs!');

var all = document.getElementsByClassName('node-link');
for (var i=0, max=all.length; i < max; i++) {
     all[i].removeAttribute('target');
    }
