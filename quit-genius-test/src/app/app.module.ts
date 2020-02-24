import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { GridService } from './services/grid.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        SignUpComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AmplifyAngularModule, 
        RouterModule.forRoot([
            { path: 'login', component: SignUpComponent},
            { path: 'home', component: GameComponent, canActivate: [AuthGuard]},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        GridService,
        AmplifyService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
