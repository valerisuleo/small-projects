import { NgModule } from '@angular/core';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetFindComponent } from './pet-find/pet-find.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { PetService } from '../../services/petstore/pet/pet.service';


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            { path: 'new', component: PetNewComponent },
            { path: 'find', component: PetFindComponent },
        ])
    ],
    declarations: [
        PetNewComponent,
        PetFindComponent
    ],
    exports: [
        PetNewComponent,
        PetFindComponent
    ],
    providers: [
        PetService
    ],
})
export class PetModule { }
