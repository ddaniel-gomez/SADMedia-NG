import { Component, OnInit } 	from '@angular/core';
import { HttpClient } 			from '@angular/common/http';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';
import { Contact }	from './contact';

//import 'assets/js/init-ng.js';

//declare var initPage: any;
declare var google: any;


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

	//contact: Contact[] = [];
	//model = new Contact(18, 'Daniel Gomez', 'ddaniel.gomez.mail@mail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex neque. Nulla lobortis arcu ut lectus pharetra, at tristique ante fermentum.', 'Subject about things');
	model = new Contact(99, '', '', '', '');
	submitted = false;

	newContact() {
		console.log(JSON.stringify(this.model));
		this.model = new Contact(20, '', '', '', '');
		this.submitted = true;
		//initPage.sendEmail();
	}

	sendAgain() {this.submitted = false;}

	onSubmit() { 
		console.log('--'+this.submitted+'--');
		this.submitted = true;
	}

	ngOnInit(): void {
		$.getScript('../assets/js/init.js');
		$.getScript('../assets/js/myMap.js');
	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }
}





