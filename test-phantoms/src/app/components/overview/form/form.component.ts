import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormClass } from './form';
import { IBookmark } from '../interfaces';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
    @Input() public selectedItem: IBookmark;
    @Output('onFormSubmitted') public click = new EventEmitter();

    constructor(
        private router: Router,
        private formModel: FormClass,
        private toastr: ToastrService
    ) { }

    public bookmark = this.formModel;
    public isValidUrl: boolean;

    public submit(): void {
        this.isValidUrl = this.urlValidator(this.bookmark.link);
        if (this.isValidUrl) {
            this.click.emit(this.bookmark);
            this.router.navigate(['/results'], { state: { data: this.bookmark } });
        } else if (!this.isValidUrl && this.bookmark.title) {
            this.toastr.error('Link must be valid url!', 'Ooops!');
        }
    }

    public urlValidator(arg: string) {
        const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

        if (regexp.test(arg)) {
            return true;
        } else {
            return false;
        }
    }

    ngOnChanges(change: SimpleChanges): void {        
        const { currentValue, firstChange } = change.selectedItem;
        if (currentValue && !firstChange) {
            // prepopulate input fields;
            this.bookmark.title = currentValue.title;
            this.bookmark.link = currentValue.link;
        } else {
            // clean up input fields after submit;
            this.bookmark.title = '';
            this.bookmark.link = '';
        }
    }
}
