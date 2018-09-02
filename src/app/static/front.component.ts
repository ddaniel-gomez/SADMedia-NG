import { Component, OnInit } from '@angular/core';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';

@Component({
	selector: 'section-front',
	templateUrl: './front.component.html'
})

export class FrontComponent implements OnInit {
	getI18n(title){
	  return I18N.find(x => x.title === title);
	}
	ngOnInit(): void {
		$.getScript('/SADMedia-NG/assets/js/init.js');
		$.getScript('/SADMedia-NG/assets/js/front.js');
	}
}