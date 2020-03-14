import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { ExchangeRatesService } from './services/exchange-rates.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
      DataService,
      ExchangeRatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
