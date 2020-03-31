import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bootstrap-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() formGroup: any;
    @Output('handleSubmit') submit = new EventEmitter();

    constructor() { }

    create(): void {
        const { value } = this.formGroup;
        this.submit.emit(value);
    }

    ngOnInit(): void {
    }

}
