import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { RouterModule } from '@angular/router';
import { IndexRatesComponent } from './components/index-rates/index-rates.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    IndexRatesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
        { path: 'home', component: IndexRatesComponent},
        { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
      DataService,
      ExchangeRatesService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
