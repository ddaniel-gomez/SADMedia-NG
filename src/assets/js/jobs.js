(function($){
  $(function(){
  	$(".owl-carousel").owlCarousel({
      items: 1,
      dots: true,
      nav: false,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      onTranslated: callback
    });

    function callback(event){
      $(event.target).find('.alt').css('transform','rotateX(0deg)');
    }

    $('.slide-block').on('mouseover', function(){
      $(this).find('.alt').css('transform','rotateX(0deg)');
    });

    $('.slide-block').on('mouseout', function(){
      $(this).find('.alt').css('transform','rotateX(90deg)');
    });

    //amcharts
	var chart = AmCharts.makeChart( "chartdiv", {
		"type": "gantt",
		"theme": "chalk",
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
		  "balloonText": "<b>[[company]]</b><br />[[open]] -- [[value]]",
		  "legend": {
			"enabled": true,
			"useGraphSettings": true
		  },
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
	        "end": "15-11-2017",
	        "company": "TuEquus"
	      }, {
	        "start": "01-11-2017",
	        "end": "28-01-2018",
	        "company": "Kywyky"
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
	        "end": "01-12-2017",
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
	}); //end chart var


	/*chart.addListener("rendered", function(event) {
		chart.zoomToDates(new Date(2005, 10, 25), new Date(2015, 0, 31));
	});*/



  }); // end of document ready
})(jQuery); // end of jQuery name space