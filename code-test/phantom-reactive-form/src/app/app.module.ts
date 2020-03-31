// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { OverviewComponent } from './views/overview/overview.component';
import { ResultsComponent } from './views/results/results.component';
import { FormComponent } from './common/form/container/form.component';
import { FormGroupComponent } from './common/form/input/form-group.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './common/table/table.component';
import { FakeService } from './services/fake.service';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ResultsComponent,
    FormComponent,
    FormGroupComponent,
    NavbarComponent,
    TableComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
      FakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
