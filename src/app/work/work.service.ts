import { Injectable } 	from '@angular/core';

import { Work }			from './work';
import { WORKS }		from '../mocks/mock-works';


@Injectable()
export class WorkService {
	getWorks(): Promise<Work[]> {
		return Promise.resolve(WORKS);
	}
}
