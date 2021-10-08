import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapFormComponent } from '../reusable-components/bootstrap-form/bootstrap-form.component';
import { BootstrapSelectComponent } from '../reusable-components/bootstrap-select/bootstrap-select.component';
import { BootstrapInputComponent } from '../reusable-components/bootstrap-input/bootstrap-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        BootstrapFormComponent,
        BootstrapSelectComponent,
        BootstrapInputComponent
    ],
    exports: [
        BootstrapFormComponent,
        BootstrapSelectComponent,
        BootstrapInputComponent
    ],
    providers: [],
})
export class SharedModule { }

