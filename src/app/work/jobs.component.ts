import { Component, OnInit } 	from '@angular/core';

import { Work } 		from './work';
import { WorkService } 	from './work.service';

import { I18n } 		from '../i18n/i18n';
import { I18N }			from '../mocks/mock-i18n';

declare var initPage: any;

@Component({
  selector: 'section-jobs',
  templateUrl: './jobs.component.html',
  providers: [WorkService]
})

export class JobsComponent implements OnInit {
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

