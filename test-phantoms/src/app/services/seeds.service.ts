import { Injectable } from '@angular/core';

@Injectable()
export class BookmarksService {

    getBookmarks() {
        return [
            {
                _id: "5b21ca3eeb7f6fbccd471815",
                title: "Terminator",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd471816",
                title: "Die Hard",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd471817",
                title: "Get Out",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd471819",
                title: "Trip to Italy",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181a",
                title: "Airplane",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181b",
                title: "Wedding Crashers",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181e",
                title: "Gone Girl",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181f",
                title: "The Sixth Sense",
                link: ''
            },
            {
                _id: "5b21ca3eeb7f6fbccd471821",
                title: "The Avengers",
                link: ''
            }
        ];
    }

    constructor() { }
}
