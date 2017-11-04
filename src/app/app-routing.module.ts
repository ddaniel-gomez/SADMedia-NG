import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FrontComponent } from './static/front.component';
import { JobsComponent } from './work/jobs.component';
import { ProcessComponent } from './static/section-process.component';
import { IdentityComponent } from './static/section-identity.component';
import { AboutComponent } from './static/section-about.component';
import { ContactComponent } from './forms/section-contact.component';

const appRoutes: Routes = [
  { path: 'front', component: FrontComponent },
  { path: '',   redirectTo: '/front', pathMatch: 'full' },
  { path: 'work', component: JobsComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'identity', component: IdentityComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
  /*{ path: '**', component: PageNotFoundComponent }, 
  { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' }}*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}