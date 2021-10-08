import formTemplate from './form-template';
import { Component, OnInit } from '@angular/core';
import { IPet } from '../interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BootstrapFormComponent } from '../../../reusable-components/bootstrap-form/bootstrap-form.component';
import { PetService } from '../../../services/petstore/pet/pet.service';

@Component({
    selector: 'pet-new',
    templateUrl: './pet-new.component.html',
    styleUrls: ['./pet-new.component.scss']
})
export class PetNewComponent extends BootstrapFormComponent implements OnInit {

    public status = [
        { name: 'available', id: 1 },
        { name: 'pending', id: 2 },
        { name: 'sold', id: 3 }
    ];
    public photos: string[] = [];
    public currentDisplay: string = '';
    public isPhotoSelected: boolean = false;
    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: PetService, private router: Router) {
        super()
    }

    public getCurrent(photo: string): void {
        this.isPhotoSelected = true;
        this.currentDisplay = photo;
    }

    public get photoMain(): string {
        if (!this.photos.length && this.formGroup && this.formGroup.value) {
            return this.formGroup.value.photoUrls;
        } else {
            return this.photos[0];
        }
    }

    private get inputPhoto(): any {
        return this.formGroup.get('photoUrls');
    }

    public handlePhoto(isClicked: boolean): void {
        if (isClicked) {
            const { controls, value } = this.formGroup;

            this.photos.unshift(value.photoUrls);

            if (this.photos.length) {
                controls.photoUrls.clearValidators();
                this.inputPhoto.reset();
            }
        }
    }

    public handleSubmit(isSubmitted: boolean): void {
        if (isSubmitted) {
            const newPet = {} as IPet;
            const { value } = this.formGroup;
            newPet.photoUrls = [];

            this.photos.forEach((photo: string) => newPet.photoUrls.push(photo));
            newPet.name = value.name;
            newPet.id = +value.uid;
            newPet.status = value.status.name;
            if (!this.photos.length) {
                newPet.photoUrls.push(value.photoUrls);
            };
            
            this.service
                .create(newPet)
                .pipe(takeUntil(this.destroyed$))
                .subscribe((response) => {
                    if (response.id) {
                        this.router.navigate(['/pet/find']);
                    }
                }, (error: Error) => console.log(error));
        }
    }

    public ngOnInit(): void {
        this.formMaker(formTemplate);
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

}
