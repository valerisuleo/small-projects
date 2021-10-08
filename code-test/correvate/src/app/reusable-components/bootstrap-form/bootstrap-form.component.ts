import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bootstrap-form',
    templateUrl: './bootstrap-form.component.html',
    styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {

    @Input() public btnLabel: string;
    @Input() public formGroup: FormGroup;
    @Output('handleSubmit') public ngSubmit = new EventEmitter();

    public inputs = [];
    public selects = [];
    public checkbox = [];

    constructor() { }

    public formMaker(array): void {
        let obj = {};
        array.forEach((item) => {
            const key = item.name;
            obj[key] = new FormControl('', [
                item.isRequired ? Validators.required : Validators.nullValidator,
                Validators.minLength(item.minLenght),
            ])
        });
        this.formGroup = new FormGroup(obj);
        this.formPartials(array)
    }

    public formPartials(array): void {
        array.forEach((item) => {
            if (item.type !== 'select' && item.type !== 'checkbox') {
                this.inputs.push(item);
            } else if (item.type === 'checkbox') {
                this.checkbox.push(item);
            } else {
                this.selects.push(item);
            }
        });
    }

    public submit(): void {
        this.ngSubmit.emit(true);
    }

    public ngOnInit(): void {
    }

}
