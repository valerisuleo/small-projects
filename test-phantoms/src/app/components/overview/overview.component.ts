import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../../services/seeds.service';
import { IBookmark } from './interfaces';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    public all: IBookmark[] = [];
    public selectedItem: IBookmark;

    constructor(private service: BookmarksService) { }

    public bookmarksIndex(): void {
        const response = this.service.getBookmarks();
        const reMapped = this.addId(response);
        const isData: IBookmark[] = JSON.parse(localStorage.getItem('bookmarksIndex'));
        this.all = !isData ? reMapped : isData;
    }

    public addId(arr): IBookmark[] {        
        return arr.map((item) => {
            const id = Math.floor(Math.random() * 1000000 + 1);
            return {
                ...item,
                id
            }
        }); 
    }

    // save data to local storage
    public saveData(arg): void {
        const str: string = JSON.stringify(arg);
        localStorage.setItem('bookmarksIndex', str);
    }

    public onFormSubmitted(obj: IBookmark): void {
        this.all.push(obj);
        this.saveData(this.all);
    }
    
    public editCurrentItem(obj: IBookmark) {
        this.selectedItem = obj;
    }

    public ngOnInit(): void {
        this.bookmarksIndex();
    }

}
