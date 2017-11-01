import { Component, OnInit } 	from '@angular/core';
import { BrowserModule } 				from '@angular/platform-browser'

import { Work } 		from './work/work';
import { WorkService } 	from './work/work.service';

import { I18n } 	from './i18n/i18n';
import { I18N }		from './mocks/mock-i18n';
import { NavigationComponent } 	from './nav/navigation.component';
import { FrontComponent } from './static/front.component';
import { AboutComponent } 	from './static/section-about.component';
import { ContactComponent } 	from './forms/section-contact.component';
import { FooterComponent } 	from './static/footer.component';

import 'assets/js/init-ng.js';

declare var initPage: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WorkService]
})

export class AppComponent implements OnInit {
	title = 'app';
	I18n = I18N;
	works: Work[];

	constructor(private workService: WorkService) {
		initPage.init();
	}

	getWorks(): void {
		this.workService.getWorks().then(works => this.works = works);
	}

	getI18n(title){
	  return I18N.find(x => x.title === title);
	}

	ngOnInit(): void {
		this.getWorks();
	}

}

