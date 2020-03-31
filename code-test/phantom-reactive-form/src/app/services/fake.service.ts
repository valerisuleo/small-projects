import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FakeService {
    
    bookmarks = [
        {
            name: "Terminator",
            url: '',
        },
        {
            name: "Die Hard",
            url: ''
        },
        {
            name: "Get Out",
            url: ''
        },
        {
            name: "Trip to Italy",
            url: ''
        },
        {
            name: "Airplane",
            url: ''
        },
        {
            name: "Wedding Crashers",
            url: ''
        },
        {
            name: "Gone Girl",
            url: ''
        },
        {
            name: "The Sixth Sense",
            url: ''
        },
        {
            name: "The Avengers",
            url: ''
        },
        {
            name: "Terminator 2",
            url: '',
        },
        {
            name: "Die Hard 2",
            url: ''
        },
        {
            name: "Get Out 2",
            url: ''
        },
        {
            name: "Trip to Italy 2",
            url: ''
        },
        {
            name: "Airplane 2",
            url: ''
        },
        {
            name: "Wedding Crashers 2",
            url: ''
        },
        {
            name: "Gone Girl 2",
            url: ''
        },
        {
            name: "The Sixth Sense 2",
            url: ''
        },
        {
            name: "The Avengers 2",
            url: ''
        },
        {
            name: "Terminator 3",
            url: '',
        },
        {
            name: "Die Hard 3",
            url: ''
        },
        {
            name: "Get Out 3",
            url: ''
        },
        {
            name: "Trip to Italy 3",
            url: ''
        },
        {
            name: "Airplane 3",
            url: ''
        },
        {
            name: "Wedding Crashers 3",
            url: ''
        },
        {
            name: "Gone Girl 3",
            url: ''
        },
        {
            name: "The Sixth Sense 3",
            url: ''
        },
        {
            name: "The Avengers 3",
            url: ''
        }
    ];
    constructor() { }

    getBookmarks() {
        this.bookmarks.forEach((item) => {
            item.url = `www.${item.name.replace(/\s/g,'').toLowerCase()}.com`
        })
        return this.bookmarks;
    }
}
