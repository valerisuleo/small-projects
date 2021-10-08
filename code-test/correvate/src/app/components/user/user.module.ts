import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UserLoginService } from '../../services/petstore/user/user-login.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent },
        ])
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [UserLoginService],
})
export class UserModule { }
