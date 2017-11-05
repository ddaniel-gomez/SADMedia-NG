import { Component, OnInit } from '@angular/core';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';
import { Contact }	from './contact';

import 'assets/js/init-ng.js';

declare var initPage: any;
declare var google: any;


@Component({
	selector: 'section-contact',
	templateUrl: './section-contact.component.html'
})

export class ContactComponent implements OnInit {
	getI18n(title){
	  return I18N.find(x => x.title === title);
	}

	//contact: Contact[] = [];
	model = new Contact(18, 'Daniel Gomez', 'ddaniel.gomez.mail@mail.com', 'Ojete calor. Subject about things. Subject about things. Subject about things. Subject about things', 'Subject about things');

	newContact() {
		this.model = new Contact(20, '', '', '', '');
		initPage.sendEmail();
	}

	submitted = false;

	onSubmit() { 
		this.submitted = true;
		debugger;
	}

	ngOnInit(): void {
		$.getScript('../assets/js/init.js');
		$.getScript('../assets/js/myMap.js');
	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }
}





