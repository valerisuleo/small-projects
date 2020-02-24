import { Injectable } from '@angular/core';

@Injectable()
export class GridService {

    getGrid() {
        return {
            wordsHidden: [
                'RUBY',
                'ROCKS',
                'DAN',
                'MAT',
                'RAY'
            ],
            grid: [
                'UEWRTRBH',
                'CXGZUWRY',
                'ROCKSBAU',
                'SFKFMTYS',
                'YSOOUNZM',
                'TCGPRDAN',
                'HZGHQTUV',
                'NTCLABCE'
            ]
        };
    }

    constructor() { }
}
