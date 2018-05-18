import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { CorpoComponent } from './corpo/corpo.component';
// import { JumboComponent } from './jumbo/jumbo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    CorpoComponent,
    // JumboComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
