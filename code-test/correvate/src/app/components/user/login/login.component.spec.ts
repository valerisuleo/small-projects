import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UserLoginService } from '../../../services/petstore/user/user-login.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: UserLoginService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                RouterTestingModule
            ],
            declarations: [
                LoginComponent
            ],
            providers: [UserLoginService]
        })
        .compileComponents();
    }));

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        service = TestBed.get(UserLoginService);
        /* This is where we can simulate / test our component
           and pass in a value for formGroup where it would've otherwise
           required it from the parent
        */
        component.formGroup = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create a form with 2 controls', () => {
        fixture.detectChanges();
        expect(component.inputs.length).toEqual(2);
    });

    it('should make the name control required', () => {
        component.formGroup.get('username');
        const controlName = component.formGroup.get('username');
        controlName.setValue('');
        fixture.detectChanges();
        expect(controlName.valid).toBeFalsy();
    });
});




