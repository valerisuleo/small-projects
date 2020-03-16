import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

    @Output('outputAlias') change = new EventEmitter();
    @Input('alla') data: any;

    constructor(private router: Router) { }
    newBookmark = {
        title: null,
        link: null
    }

    submit() {
        this.change.emit(this.newBookmark);
        this.router.navigate(['/results'], {state:{ data: this.newBookmark}});

    }


    ngOnChanges(change: SimpleChanges) {
        const currentValue = change.data.currentValue;
        if (currentValue) {
            this.newBookmark = {...currentValue}
        }
    }


}
