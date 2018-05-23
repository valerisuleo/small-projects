import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgDatepickerModule } from '../ng-datepicker/module/ng-datepicker.module';


// import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
// import { BsDatepickerModule } from 'ngx-bootstrap';




import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { CorpoComponent } from './corpo/corpo.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OpzioniComponent } from './opzioni/opzioni.component';
import { IntermediarioComponent } from './intermediario/intermediario.component';
import { CapogruppoComponent } from './capogruppo/capogruppo.component';
import { TeamembersComponent } from './teamembers/teamembers.component';
import { CdispezioneComponent } from './cdispezione/cdispezione.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    CorpoComponent,
    ProgressTrackerComponent,
    LandingPageComponent,
    OpzioniComponent,
    IntermediarioComponent,
    CapogruppoComponent,
    TeamembersComponent,
    CdispezioneComponent,
    // JumboComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    // BsDatepickerModule.forRoot(),
    FormsModule,
    // DlDateTimePickerDateModule,
    NgDatepickerModule

  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
