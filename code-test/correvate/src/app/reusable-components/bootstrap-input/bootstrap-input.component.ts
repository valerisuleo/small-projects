import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'bootstrap-input',
    templateUrl: './bootstrap-input.component.html',
    styleUrls: ['./bootstrap-input.component.scss']
})
export class BootstrapInputComponent implements OnInit {

    @Input() public name: any;
    @Input() public className: any;
    @Input() public type: any;
    @Input() public label: any;
    @Input() public formGroup: FormGroup;
    @Output('handlePhoto') public onClick = new EventEmitter();

    constructor() { }

    // ngMessages
    public get input(): any {
        return this.formGroup.get(this.name);
    }

    public addItem(): void {
        this.onClick.emit(true);
    }

    public ngOnInit(): void {
    }

}
