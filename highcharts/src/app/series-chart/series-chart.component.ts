import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChartService } from '../services/chart.service'
import * as Highcharts from "highcharts";

@Component({
    selector: "series-chart",
    templateUrl: "./series-chart.component.html",
    styleUrls: ["./series-chart.component.css"]
})
export class SeriesChartComponent implements OnInit {
    @ViewChild("container", { read: ElementRef }) container: ElementRef;

    public seriesObj: any;
    public timestamps: string[] = [];
    seriesObjDraft: any[] = [];
    seriesLineHighCharts: any;

    constructor(private service: ChartService) { }

    public regularMode(): void {
        this.seriesLineHighCharts = this.service.getSeriesData();
        this.remapObj();
    }

    public deMode(): void {
        this.seriesLineHighCharts = this.service.getSeriesDemo();
        this.remapObj();
    }

    public remapObj(): void {
        const colors: string[] = this.service.getSeriesData().graphs.map((line) => {
            return line.color;
        });

        const graphType: string[] = this.service.getSeriesData().graphs.map((line) => {
            return line.graphType.toLowerCase();
        });

        const timestampTwoWeeks = this.seriesLineHighCharts.data[0].timestamps.map((item) => {
            return this.dateFormatter(item);
        });

        this.timestamps = this.sevenDays(timestampTwoWeeks);

        this.seriesObj = this.seriesLineHighCharts.data.map((item, index) => {
            return {
                name: this.labelTooltip(item.name),
                data: this.sevenDays(item.values),
                color: colors[index],
                type: graphType[index]
            }
        });
        this.seriesMaker();
    }

    public sevenDays(arr): any[] {
        return arr.slice(-7);
    }


    public labelTooltip(string) {

        if (string.includes('revenue')) {
            return 'Revenues';
        }

        if (string.includes('sales')) {
            return 'Downloads';
        }
    }

    public dateFormatter(item): string {
        const date = new Date(item);
        return String(date).substr(4, 6);
    }

    public seriesMaker(): void {
        Highcharts.chart(this.container.nativeElement, {
            title: {
                text: ""
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            chart: {
                // backgroundColor: '#D1E7F2',
                renderTo: 'container',
                events: {
                    load: function () {
                        this.renderer.image('http://highsoft.com/images/media/Highsoft-Solutions-143px.png', 80, 40, 143, 57)
                            .add();
                    }
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 1
                    }
                }
            },
            xAxis: {
                categories: this.timestamps
            },
            series: this.seriesObj
        });
    }


    ngOnInit() {
        // this.regularMode();
        this.deMode()
    }
}
