import { Component, OnInit } from '@angular/core';
import { IBookmark } from '../../common/interfaces';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    bookmark: IBookmark;

    data: any;

    constructor() { }

    get nameDynamic(): string {
        return this.data.method ? 
        `${this.data.obj.name} has been updated!` : 
        `${this.data.name} has been added to your bookmars.`;
    }
    
    get urlDynamic(): string {
        return this.data.method ? this.data.obj.url : this.data.url;
    }

    ngOnInit(): void {
        const { data } = history.state;
        this.data = data;      
    }

}
