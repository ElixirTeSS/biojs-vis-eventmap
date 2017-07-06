// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var app = require("vis-eventmap");
map_options = {
	el: document.getElementById('map'),
	key : "AIzaSyAtxeshmu-95V4KZWyDklhhO-UNqNQQJKo"
};
events_options = {
    "q": "RNA-SEQ",
	"country[]": ["United Kingdom", "Belgium"]
};

var instance = new app(map_options, events_options);
