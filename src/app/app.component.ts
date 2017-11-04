import { Component } 	from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';

import { I18n } 				from './i18n/i18n';
import { I18N }					from './mocks/mock-i18n';

//import 'assets/js/init-ng.js';

//declare var initPage: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
	title = 'app';
	I18n = I18N;

}

