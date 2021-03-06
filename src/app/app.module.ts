import {enableProdMode, NgModule} from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {HttpClientModule}         from '@angular/common/http';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';

import { WorkComponent }          from './work/work.component';
import { WorkService }            from './work/work.service';
import { JobsComponent }          from './work/jobs.component';
import { NavigationComponent } 	  from './nav/navigation.component';
import { FrontComponent }         from './static/front.component';
import { AboutComponent }         from './static/section-about.component';
import { ProcessComponent }       from './static/section-process.component';
import { IdentityComponent }      from './static/section-identity.component';
import { ContactComponent }       from './forms/section-contact.component';
import { FooterComponent }        from './static/footer.component';

enableProdMode();


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ 
  	AppComponent,
  	NavigationComponent,
  	WorkComponent,
    JobsComponent,
  	AboutComponent, 
  	FrontComponent, 
  	ProcessComponent, 
    IdentityComponent, 
  	ContactComponent,
    FooterComponent
  ],
  providers: [ 
    WorkService, 
    {provide: LocationStrategy, useClass: HashLocationStrategy} 
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {}

