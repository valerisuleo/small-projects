import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'bootstrap-select',
    templateUrl: './bootstrap-select.component.html',
    styleUrls: ['./bootstrap-select.component.scss']
})
export class BootstrapSelectComponent implements OnInit {

    constructor() { }

    @Input() name: any;
    @Input() options: any;
    @Input() optionKey: string;
    @Input() label: any;
    @Input() formGroup: FormGroup;

    ngOnInit(): void {
    }

}
