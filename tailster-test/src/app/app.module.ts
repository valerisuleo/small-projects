import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GmapsComponent } from './routes/routes-show/gmaps/gmaps.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutesService } from './services/routes.service';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RoutesIndexComponent } from './routes/routes-index/routes-index.component';
import { RoutesShowComponent } from './routes/routes-show/routes-show.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        GmapsComponent,
        RoutesIndexComponent,
        RoutesShowComponent,
        HeaderComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: 'routes/:id', component: RoutesShowComponent },
            { path: 'routes', component: RoutesIndexComponent },
            { path: '**', redirectTo: 'routes' }
        ]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBp7-48qKl3mat1o4U5zDMP_oLwY2alq8M',
            libraries: ['geometry']
        })
    ],
    providers: [
        RoutesService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
