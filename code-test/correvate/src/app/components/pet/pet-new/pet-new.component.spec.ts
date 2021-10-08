import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PetNewComponent } from './pet-new.component';
import { PetService } from '../../../services/petstore/pet/pet.service';

describe('PetNewComponent', () => {
    let component: PetNewComponent;
    let fixture: ComponentFixture<PetNewComponent>;
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
                PetNewComponent
            ],
            providers: [PetService]
        })
        .compileComponents();
    }));

    beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(PetNewComponent);
        component = fixture.componentInstance;
        service = TestBed.get(PetService);
        /* This is where we can simulate / test our component
           and pass in a value for formGroup where it would've otherwise
           required it from the parent
        */
        component.formGroup = fb.group({
            name: ['', Validators.required],
            photoUrls: ['', Validators.required],
            uid: ['', Validators.required],
            status: ['', Validators.nullValidator]
        });
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create a form with 3 input controls', () => {
        fixture.detectChanges();
        expect(component.inputs.length).toEqual(3);
    });

    it('should create a form with 1 select controls', () => {
        fixture.detectChanges();
        expect(component.selects.length).toEqual(1);
    });

    it('should store image string onclick', () => {
       component.photos = [];
       component.handlePhoto(true);
       expect(component.photos.length).toBeGreaterThan(0);
    });

    it('should make the name control required', () => {
        component.formGroup.get('photoUrls');
        const controlName = component.formGroup.get('photoUrls');
        controlName.setValue('');
        fixture.detectChanges();
        expect(controlName.valid).toBeFalsy();
    });
});




