import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { IRawData } from './interfaces';
@Component({
    selector: 'dashboard-widgets',
    templateUrl: './dashboard-widgets.component.html',
    styleUrls: ['./dashboard-widgets.component.scss']
})
export class DashboardWidgetsComponent implements OnInit {

    seriesData: IRawData[] = [];
    isFuzzy: boolean;

    constructor(private service: ChartService) { }

    getAll(): void {
        this.seriesData = this.service.getSeries();
    }

    onToggleChanged(fromBarChart) {

        if (!fromBarChart.length) {
            this.isFuzzy = fromBarChart
        } else {
            this.isFuzzy = fromBarChart[0].isFuzzy;

            let fuzzyAreaLowWidth;
            let fuzzyAreaHighWidth;
            let mediumWidthWrapper;

            const high = <HTMLElement>document.getElementsByClassName('high')[0];
            const medium = <HTMLElement>document.getElementsByClassName('medium')[0];
            const left = <HTMLElement>document.getElementsByClassName('left')[0];
            const right = <HTMLElement>document.getElementsByClassName('right')[0];
            const low = <HTMLElement>document.getElementsByClassName('low')[0];

            fromBarChart.forEach(el => {
                fuzzyAreaHighWidth = el.fuzzyAreaHighWidth;
                mediumWidthWrapper = el.mediumWidthWrapper;
                fuzzyAreaLowWidth = el.fuzzyAreaLowWidth;
            });

            high.style.marginLeft = `${fromBarChart[1].startPoint}px`;
            high.style.width = `${fuzzyAreaHighWidth}px`;

            medium.style.marginLeft = `${fromBarChart[1].startPoint + 6}px`;
            medium.style.width = `${mediumWidthWrapper - 25}px`;

            left.style.width = `${fuzzyAreaLowWidth - 10}px`;
            left.style.marginLeft = `${fromBarChart[2].startPoint - fromBarChart[1].startPoint - 16}px`;

            right.style.width = `${fuzzyAreaHighWidth}px`;

            low.style.marginLeft = `${fromBarChart[2].startPoint - 6}px`;
            low.style.width = `${fuzzyAreaLowWidth - 10}px`;
        }
    }

    ngOnInit(): void {
        this.getAll();
    }
}
