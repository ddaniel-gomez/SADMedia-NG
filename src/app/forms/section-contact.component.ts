import { Component, OnInit } 	from '@angular/core';
import { HttpClient } 			from '@angular/common/http';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';
import { Contact }	from './contact';

declare var google: any;
declare var emailjs: any;


@Component({
	selector: 'section-contact',
	templateUrl: './section-contact.component.html'
})

export class ContactComponent implements OnInit {
	
	// Inject HttpClient into your component or service.
  	constructor(private http: HttpClient) {}

	getI18n(title){
	  return I18N.find(x => x.title === title);
	}

	model = new Contact(99, '', '', '', '');
	submitted = false;

	newContact() : void {
		$('.letter').addClass('sending');
		setTimeout(function() {
			this.submitted = true;	
			$('.letter').removeClass('sending');
			$('.success-send').addClass('sended valign-wrapper');
		}.bind(this), 300);
		//alert('saved:'+ JSON.stringify(this.model.name));

		//using emailjs
		// parameters: service_id, template_id, template_parameters
		emailjs.sendForm("gmail","angular_form","ngForm")
		.then(function(response) {
		   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		}, function(err) {
		   console.log("FAILED. error=", err);
		});
	}

	sendAgain() : void {
		this.submitted = false;
		$('.success-send').removeClass('sended valign-wrapper');
	}

	ngOnInit(): void {
		$.getScript('/assets/js/init.js');
		$.getScript('/assets/js/myMap.js');
	}

	// TODO: Remove this when we're done
  	//get diagnostic() { return JSON.stringify(this.model); }
}





