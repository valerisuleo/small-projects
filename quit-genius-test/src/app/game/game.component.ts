import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { Router } from '@angular/router';
import { IGrid, ILetter } from './interfaces'

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    public all: IGrid;
    public grid: ILetter[][];
    public word: string;
    public contentList: string[] = [];
    public wordsHidden: string[] = [];

    constructor(
        private service: GridService,   
        private router: Router
        ) { }

    public renderGrid(): void {
        this.all = this.service.getGrid();
        const { grid, wordsHidden } = this.all;
        this.wordsHidden = wordsHidden;

        let gridShaped: any = grid.map(item => item.split(''));
        
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
        const current: ILetter = e;
        const selectedValues: ILetter[][] = [];

        current.isSelected = !current.isSelected;
        
        const selected = this.grid.map(item => item.filter(obj => obj.isSelected === true));        

        selected.forEach(array => {
            if (array.length > 0) {
                selectedValues.push(array);
            }
        });        
        this.getValues(selectedValues);
        this.matchWord();
    }

    public getValues(selectedValues: ILetter[][]): void {
        const values: string[] = [];

        selectedValues.forEach((item: ILetter[]) => {
            item.forEach((obj) => {
                values.push(obj.value);
            });
        });        
        this.word = values.join('');
    }

    public matchWord(): void {
        this.wordsHidden.forEach((item: string) => {
            if (item === this.word) {
                // deep cloning a string
                const copy: string = (' ' + this.word).slice(1);
                this.contentList.push(copy);
                // removing duplicates
                this.contentList = [...new Set(this.contentList)];
                this.word = '';
                setTimeout(() => {
                    this.renderGrid();
                }, 500);
            }
        });
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
    
    isOpen = false;

    public closeModal(e): void {
        const current: HTMLElement = e.target;
        const insideArea: boolean = current.classList.contains('list-group-item');
        if (!insideArea) {
            this.isOpen = false;
        }
    }

    public openModal(): void {
        this.isOpen = !this.isOpen
    }

    public ngOnInit() {
        this.renderGrid();
    }

}
