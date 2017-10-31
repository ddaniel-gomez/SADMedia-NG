import { Component } from '@angular/core';

import { Work } from './work';
import { WorkService } from './work.service';

@Component({
  selector: 'app-work',
  template: ``
})

export class WorkComponent {
  works: Work[] = [];

  constructor(private workService: WorkService) { }

}