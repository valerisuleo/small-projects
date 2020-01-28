// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { AppComponent } from './app.component';
import { GmapsComponent } from './routes/routes-show/gmaps/gmaps.component';
import { RoutesIndexComponent } from './routes/routes-index/routes-index.component';
import { RoutesShowComponent } from './routes/routes-show/routes-show.component';
import { HeaderComponent } from './header/header.component';
// SERVICES
import { DataService } from './services/data.service';
import { RoutesService } from './services/routes.service';


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
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        RoutesService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
