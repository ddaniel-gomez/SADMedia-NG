import { Component } from '@angular/core';

import { I18n } 	from '../i18n/i18n';
import { I18N }		from '../mocks/mock-i18n';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html'
})

export class NavigationComponent {
	getI18n(title){
	  return I18N.find(x => x.title === title);
	}
}
