// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
// components
import { AppComponent } from './app.component';
import { BootstrapNavbarComponent } from './components/bootstrap-navbar/bootstrap-navbar.component';
import { PetModule } from './components/pet/pet.module';
import { UserModule } from './components/user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapNavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        SharedModule,
        PetModule,
        UserModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
