import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TableComponent } from './components/overview/table/table.component';
import { FormComponent } from './components/overview/form/form.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ResultsComponent } from './components/results/results.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BookmarksService } from './services/seeds.service';
import { FormClass } from './components/overview/form/form';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    OverviewComponent,
    ResultsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
        { path: 'results', component: ResultsComponent},
        { path: 'overview', component: OverviewComponent},
        { path: '**', redirectTo: 'overview' }
    ])
  ],
  providers: [
      BookmarksService,
      FormClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
