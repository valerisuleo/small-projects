import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    signedIn: boolean;
    user: any;
    greeting: string;

    usernameAttributes = "email"; 

    signUpConfig = {
        header: 'Sign Up',
        hideAllDefaults: true,
        defaultCountryCode: '1',
        signUpFields: [
          {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string',
          },
          {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 2,
            type: 'password'
          },
        ]
      }

    constructor(
        private service: AmplifyService, 
        private router: Router
        ) { }

    auth() {
        this.service.authStateChange$
        .subscribe((authState) => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
                this.router.navigate(['/home']);
            }
        })
    }

    ngOnInit() {
        this.auth();
    }
}
