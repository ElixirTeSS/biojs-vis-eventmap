/*
 * vis-eventmap
 * https://github.com/ElixirTeSS/vis-eventmap
 *
 * Copyright (c) 2017 Niall Beard
 * Licensed under the MIT license.
 */

/**
@class viseventmap
 */

var tess_api = require("biojs-rest-tessapi");
var GoogleMapsLoader = require('google-maps'); // only for common js environments 

var  viseventmap;

module.exports = viseventmap = function(map_options, event_options){
  map_options = map_options || {};
  GoogleMapsLoader.KEY = map_options['key'] 
  /*GoogleMapsLoader.LIBRARIES = ['MarkClusterer']*/
  GoogleMapsLoader.load(function(google) {
        var center = {lat: 53.4808, lng: -2.2426};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: center
        });
	  	var api = new tess_api.EventsApi(); // Allocate the API class we're going to use.
		api.eventsJsonGet(
			event_options, //see lib/api/EventsApi.js for full params options
			function(error, data, response){ 
				data.forEach(function(event){
					var marker = new google.maps.Marker({
				        position: {lat: parseFloat(event.latitude), lng: parseFloat(event.longitude)},
				        map: map
			        });
				})
			}
		)
  })
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     viseventmap.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */

