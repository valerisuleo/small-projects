import { Component, OnInit } from '@angular/core';
import { ChartService } from './../services/chart.service';

interface IPerformanceBreakdown {
    appIcon?: string,
    graphName?: string,
    name?: string,
    download?: number,
    downloadPrev?: number,
    downloadTotal?: number,
    downloadsPrevTotal?: number,
    revenue?: number,
    revenuePrev?: number,
    revenuesTotal?: number,
    revenuesPrevTotatal?: number,
}


@Component({
    selector: 'bar-charts',
    templateUrl: './bar-charts.component.html',
    styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

    all = [];
    downloadsY: number[] = [];
    downloadsPrevTotal: number[] = [];
    revenuesY: number[] = [];
    revenuesPrevY: number[] = [];
    revenuesTotal: number[] = [];
    revenuesPrevTotatal: number[] = [];
    downloadAll: Array<IPerformanceBreakdown[]> = [];

    constructor(private service: ChartService) { }


    getAll() {
        this.all = this.service.getChartData();
        this.downloadsY = this.getValues(this.all[1], 'y');
        this.downloadsPrevTotal = this.getValues(this.all[1], 'total');
        this.revenuesY = this.getValues(this.all[2], 'y');
        this.revenuesTotal = this.getValues(this.all[2], 'total');
        this.revenuesPrevY = this.getValues(this.all[3], 'y');
        this.revenuesPrevTotatal = this.getValues(this.all[3], 'total');
        console.log('revenuesPrevTotatal', this.revenuesPrevTotatal);
    }

    public getValues(array: any, key: string): number[] {
        return array.map((item: any) => {
            return item[key];
        });
    }

    public addPropertyToArrOfObj(): any {
        return this.all[0].map((item: any, index: any) => {
            const newKey: any = Object.assign({}, item);
            newKey.downloadPrev = this.downloadsY[index];
            newKey.downloadsPrevTotal = this.downloadsPrevTotal[index];
            newKey.revenue = this.revenuesY[index];
            newKey.revenuePrev = this.revenuesPrevY[index];
            newKey.revenuesTotal = this.revenuesTotal[index];
            newKey.revenuesPrevTotatal = this.revenuesPrevTotatal[index];
            return newKey;
        });
    }

    public remapObj(): void {
        const downloadDraft = this.addPropertyToArrOfObj();
        console.log('downloadDraft', downloadDraft);

        this.downloadAll = downloadDraft.map((item: any) => {
            return {
                appIcon: item.appIcon,
                graphName: item.graphName,
                name: item.name,
                download: item.y,
                downloadPrev: item.downloadPrev,
                downloadTotal: item.total,
                downloadsPrevTotal: item.downloadsPrevTotal,
                revenue: item.revenue,
                revenuePrev: item.revenuePrev,
                revenuesTotal: item.revenuesTotal,
                revenuesPrevTotatal: item.revenuesPrevTotatal,
            }
        });
        console.log('downloadAll', this.downloadAll);
    }

    ngOnInit() {
        this.getAll();
        this.remapObj();

    }
}
