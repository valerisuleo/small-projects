import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { Router } from '@angular/router';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    public grid: any[][];
    public all: any;
    public word: string;
    public contentList = [];
    public wordsHidden = [];

    constructor(
        private service: GridService, 
        private router: Router
        ) { }

    public renderGrid(): void {
        this.all = this.service.getGrid();
        const { grid, wordsHidden } = this.all;
        this.wordsHidden = wordsHidden;

        let gridShaped = grid.map(item => item.split(''))

        gridShaped = gridShaped.map((el) => {
            return el.map((item: string) => {
                return {
                    value: item,
                    isSelected: false
                }
            })
        });
        this.grid = gridShaped;
    }

    public getLetters(e): void {
        const current = e;
        const selectedValues = [];
        let selected = [];

        current.isSelected = !current.isSelected;
        
        selected = this.grid.map(item => item.filter(obj => obj.isSelected === true));

        selected.forEach(array => {
            if (array.length > 0) {
                selectedValues.push(array);
            }
        });
        this.getValues(selectedValues);
        this.matchWord();
    }

    public getValues(selectedValues: any[][]): void {
        const values = [];

        selectedValues.forEach((item: any[]) => {
            item.forEach((obj) => {
                values.push(obj.value);
            });
        });
        this.word = values.join('');
    }

    public matchWord(): void {

        this.wordsHidden.forEach((item) => {
            if (item === this.word) {
                // deep cloning a string
                const copy = (' ' + this.word).slice(1);
                this.contentList.push(copy);
                // removing duplicates
                this.contentList = [...new Set(this.contentList)];
                this.word = '';
                setTimeout(() => {
                    this.renderGrid();
                }, 500);
            }
        });

        if (this.contentList.length === this.wordsHidden.length ) {
            console.log('win');
            
        }
    }


    public cleanGrid(): void {
        this.renderGrid();
    }
    
    public resetGame(): void {    
        this.contentList = [];    
        this.renderGrid();
    }

    public signOut(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    public ngOnInit() {
        this.renderGrid();
    }

}
