import formTemplate from './form-template';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPet } from '../interfaces';
import { BootstrapFormComponent } from '../../../reusable-components/bootstrap-form/bootstrap-form.component';
import { PetService } from '../../../services/petstore/pet/pet.service';

@Component({
    selector: 'pet-find',
    templateUrl: './pet-find.component.html',
    styleUrls: ['./pet-find.component.scss']
})
export class PetFindComponent extends BootstrapFormComponent implements OnInit, OnDestroy {

    public myPet = {} as IPet;
    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: PetService) {
        super()
    }

    public handleSubmit(isSubmitted: boolean): void {
        if (isSubmitted) {
            const { value } = this.formGroup;

            this.service
                .getItem(value.petId)
                .pipe(takeUntil(this.destroyed$))
                .subscribe((response: IPet) => {
                    this.myPet = response;
                }, (error: Error) => console.log(error));
            this.formGroup.reset();
        }
    }

    public ngOnInit(): void {
        this.formMaker(formTemplate)
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

}
