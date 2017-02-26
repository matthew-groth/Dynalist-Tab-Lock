// changes html of each link on the page to open in the current tab

var all = document.getElementsByClassName('node-link');
for (var i=0, max=all.length; i < max; i++) {
     all[i].removeAttribute('target');
    }
