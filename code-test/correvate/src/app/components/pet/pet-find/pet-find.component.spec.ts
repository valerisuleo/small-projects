import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PetFindComponent } from './pet-find.component';
import { PetService } from '../../../services/petstore/pet/pet.service';

describe('PetNewComponent', () => {
    let component: PetFindComponent;
    let fixture: ComponentFixture<PetFindComponent>;
    let service: PetService;

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
                PetFindComponent
            ],
            providers: [PetService]
        })
            .compileComponents();
    }));

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(PetFindComponent);
        component = fixture.componentInstance;
        service = TestBed.get(PetService);
        /* This is where we can simulate / test our component
           and pass in a value for formGroup where it would've otherwise
           required it from the parent
        */
        component.formGroup = fb.group({
            petId: ['', Validators.required],
        });
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create a form with 1 input controls', () => {
        fixture.detectChanges();
        expect(component.inputs.length).toEqual(1);
    });

    it('should make the name control required', () => {
        component.formGroup.get('petId');
        const controlName = component.formGroup.get('petId');
        controlName.setValue('');
        fixture.detectChanges();
        expect(controlName.valid).toBeFalsy();
    });
});




