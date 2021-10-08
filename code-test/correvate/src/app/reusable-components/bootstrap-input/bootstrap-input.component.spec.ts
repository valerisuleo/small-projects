import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BootstrapInputComponent } from './bootstrap-input.component';

describe('BootstrapInputComponent', () => {
    let component: BootstrapInputComponent;
    let fixture: ComponentFixture<BootstrapInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [
                BootstrapInputComponent
            ],
        })
            .compileComponents();
    }));

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(BootstrapInputComponent);
        component = fixture.componentInstance;
        // Getting an error when trying to run karma TS spec file. 
        // All modules and imports seem to be working fine with no conflicts. 
        // Turned out It was happening because there were no @Input defined in the test case, so I  need to create it as below:
        component.formGroup = fb.group({
            username: ['username', Validators.required],
        });
        component.name = 'username';
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});




