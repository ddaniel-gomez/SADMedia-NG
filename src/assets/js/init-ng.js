var initPage = (function() { 
  return { 
    init: function() {
    	/*$('.button-collapse').sideNav({edge: 'right'});
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) == false ) {
	      $('.parallax').parallax();
	    }
	    
	    $('.scrollspy').scrollSpy();

	    //amcharts
		var chart = AmCharts.makeChart( "chartdiv", {
		"type": "gantt",
		"theme": "light",
		"marginRight": 20,
		"period": "DD",
		"dataDateFormat": "DD-MM-YYYY",
		"columnWidth": 0.6,
		"valueAxis": {
		  "type": "date"
		},
		"brightnessStep": 2,
		"graph": {
		  "fillAlphas": 0,
		  "lineAlpha": 1,
		  "lineColor": "#fff",
		  //"fillColors": "#263238",
		  //"dashLength": 5,
		  "fillAlphas": 0.85,
		  "balloonText": "<b>[[company]]</b><br />[[open]] -- [[value]]"
		},
		"rotate": true,
		"categoryField": "category",
		"segmentsField": "segments",
		"colorField": "color",
		"startDateField": "start",
		"endDateField": "end",
		"dataProvider": [ {
		"category": "Freelance",
		"segments": [ {
		    "start": "10-02-2010",
		    "end": "18-04-2010",
		    "color": "#263238",
		    "company": "Symbian S3"
		  }, {
		    "start": "08-10-2009",
		    "end": "15-11-2009",
		    "company": "Las Hadas"
		  }, {
		    "start": "03-07-2017",
		    "end": "28-08-2017",
		    "company": "TuEquus"
		  }, {
		    "start": "18-02-2011",
		    "end": "06-09-2012",
		    "company": "BlytheMuseum"
		  }, {
		    "start": "23-04-2014",
		    "end": "15-12-2015",
		    "company": "Cuento de Invierno"
		  }, {
		    "start": "17-01-2002",
		    "end": "23-04-2005",
		    "company": "SADMedia"
		  }, {
		    "start": "08-09-2012",
		    "end": "07-03-2013",
		    "company": "Quonners"
		  }, {
		    "start": "02-02-2007",
		    "end": "04-05-2007",
		    "company": "QuickImage"
		  }, {
		    "start": "27-05-2007",
		    "end": "18-06-2007",
		    "company": "Vodafone"
		  }, {
		    "start": "02-08-2015",
		    "end": "17-10-2016",
		    "company": "Campo4"
		  }, {
		    "start": "20-03-2017",
		    "end": "10-04-2017",
		    "company": "OP3Pharmaceuticals"
		  } ]
		}, {
		  "category": "Company",
		  "segments": [ {
		    "start": "09-04-2007",
		    "end": "23-08-2017",
		    "color": "#4f7c92",
		    "company": "Avalon Informática y Servicios"
		  }, {
		    "start": "06-03-2006",
		    "end": "31-01-2007",
		    "company": "Andromedical"
		  }, {
		    "start": "01-12-2005",
		    "end": "28-02-2006",
		    "company": "Hispanodigital"
		  }, {
		    "start": "04-05-2004",
		    "end": "25-11-2005",
		    "company": "Telefónica Soluciones (Atlántida Ed. Mult.)"
		  }, {
		    "start": "03-05-2001",
		    "end": "10-12-2001",
		    "company": "Pryconsa"
		  }, {
		    "start": "22-02-2000",
		    "end": "07-05-2001",
		    "company": "LaNetro"
		  } ]
		} ],
		"valueScrollbar": {
		  "autoGridCount": true
		},
		"chartCursor": {
		  "cursorColor": "#263238",
		  "valueBalloonsEnabled": false,
		  "cursorAlpha": 0,
		  "valueLineAlpha": 0.5,
		  "valueLineBalloonEnabled": true,
		  "valueLineEnabled": true,
		  "zoomable": true,
		  "valueZoomable": true
		},
		"export": {
		  "enabled": false
		},
		"addClassNames": true
		} );*/
    }, //init

    sendEmail: function(){
    	$('#presend').addClass('sending');
    }

    /*mapVar: function(){
    	var map;
    }, //var map

	initMap: function () {
		map = new google.maps.Map($('#map'), {
			center: {lat: 40.576608, lng: -3.929365},
			zoom: 10,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false
	  	});

	  	bounds  = new google.maps.LatLngBounds();

		var marker = new google.maps.Marker({
			position: {lat: 40.576608, lng: -3.929365},
			map: map,
			title: "Here I'm!",
			icon: 'https://www.sadmedia.com/img/map-marker-icon.png'
		});

		loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
		bounds.extend(loc);

		//var infoWindow = new google.maps.InfoWindow({map: map});
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			  var pos = {
			    lat: position.coords.latitude,
			    lng: position.coords.longitude
			  };

			  //infoWindow.setPosition(pos);
			  //infoWindow.setContent('You are here');
			  //map.setCenter(pos);
			  
			  var marker2 = new google.maps.Marker({
			    position: pos,
			    map: map,
			    title: "You're here",
			    icon: 'https://www.sadmedia.com/img/map-marker-icon-visitor.png'
			  });
			  loc2 = new google.maps.LatLng(marker2.position.lat(), marker2.position.lng());
			  bounds.extend(loc2);

			  map.fitBounds(bounds); //auto-zoom
			  map.panToBounds(bounds); //auto-center

			}, function() {
			  handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}
	}*/ //return initMap 
  } 
})(initPage||{})

/*var myExtObject = (function() {
	return {
		
	}
})(myExtObject||{})*/



