import { NgModule } 	from '@angular/core';
import { BrowserModule }from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { WorkService }  from './work/work.service';
import { NavigationComponent } 	from './nav/navigation.component';
import { FrontComponent } from './static/front.component';
import { AboutComponent } from './static/section-about.component';
import { ProcessComponent } from './static/section-process.component';
import { ContactComponent } from './forms/section-contact.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
  	AppComponent,
  	NavigationComponent,
  	WorkComponent, 
  	AboutComponent, 
  	FrontComponent, 
  	ProcessComponent, 
  	ContactComponent
  ],
  providers: [ WorkService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
