import { Component } from '@angular/core';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';

@Component({
	selector: 'section-footer',
	templateUrl: './footer.component.html'
})

export class FooterComponent {
	getI18n(title){
	  return I18N.find(x => x.title === title);
	}
}