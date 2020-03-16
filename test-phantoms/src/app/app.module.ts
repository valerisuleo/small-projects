import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { OverviewComponent } from './overview/overview.component';
import { ResultsComponent } from './results/results.component';
import { BookmarksService } from './services/seeds.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    OverviewComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'results', component: ResultsComponent},
        { path: 'overview', component: OverviewComponent},
        { path: '**', redirectTo: 'overview' }
    ])
  ],
  providers: [
      BookmarksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
