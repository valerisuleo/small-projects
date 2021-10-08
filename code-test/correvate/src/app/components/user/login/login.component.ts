import formTemplate from './form-template';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BootstrapFormComponent } from '../../../reusable-components/bootstrap-form/bootstrap-form.component';
import { UserLoginService } from '../../../services/petstore/user/user-login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BootstrapFormComponent implements OnInit, OnDestroy {

    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: UserLoginService, private router: Router) {
        super()
    }

    public handleSubmit(isSubmitted: boolean): void {
        if (isSubmitted) {
            this.login();
        }
    }

    private login(): void {
        const { value } = this.formGroup;
        const apiEndPoint: string = `login?username=${value.username}&password=${value.password}`;

        this.service.getItem(apiEndPoint)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (response.code === 200) {
                    this.router.navigate(['/pet/new']);
                }
            }, (error: Error) => console.log(error));
    }

    public ngOnInit(): void {
        this.formMaker(formTemplate);
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

}
