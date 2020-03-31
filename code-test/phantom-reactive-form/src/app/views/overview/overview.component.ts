import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBookmark } from '../../common/interfaces';
import { FakeService } from '../../services/fake.service';
import { Router } from '@angular/router';
import { LinkValidators } from '../../common/form/validators';

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    keys: string[] = [];
    bookmarks = [];
    method: string;
    currentIndex: number;

    constructor(private service: FakeService, private router: Router) { }

    formObj = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(2)
        ]),
        url: new FormControl('', [
            Validators.required,
            LinkValidators.urlValidator,
        ],  LinkValidators.isUrlReal)
    });

    getKeys(): void {
        const { value } = this.formObj;
        this.keys = Object.keys(value);
    }

    navigateTo(arg): void {
        this.router.navigate(['/results'], { state: { data: arg } });
    }

    // save data to local storage
    saveData(arg: any): void {
        const str: string = JSON.stringify(arg);
        localStorage.setItem('bookmarksIndex', str);
    }
    
    bookmarksIndex(): void {
        const response = this.service.getBookmarks();
        const isData: IBookmark[] = JSON.parse(localStorage.getItem('bookmarksIndex'));
        this.bookmarks = !isData ? response : isData;
    }

    bookmarkNew(obj: IBookmark): void {
        this.bookmarks.unshift(obj);
        this.saveData(this.bookmarks);
        this.navigateTo(obj);
    }
    
    bookmarkUpdate(obj: IBookmark): void {
        this.bookmarks[this.currentIndex] = obj;
        this.saveData(this.bookmarks);
    }

    bookmarkDelete(): void {
        this.bookmarks.splice(this.currentIndex, 1);
        this.saveData(this.bookmarks);
    }

    handleSelection(selected): void {
        this.currentIndex = this.bookmarks.indexOf(selected.obj);
        this.method = selected.method;

        if (this.method === 'Edit') {
            this.formObj.setValue({
                name: selected.obj.name,
                url: selected.obj.url
            });
        } else {
            this.bookmarkDelete();
        }
    }

    handleSubmit(obj: IBookmark): void {
        if (this.method === 'Edit') {
            this.bookmarkUpdate(obj);
            this.navigateTo({
                obj,
                method: this.method
            });
            this.method = '';
        } else {
            this.bookmarkNew(obj);
        }
        this.formObj.reset();
    }


    ngOnInit(): void {
        this.getKeys();
        this.bookmarksIndex();
    }

}
