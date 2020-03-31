import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IRawData, IUpperData, IFuzzyArea } from '../interfaces';

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {

    @Input() seriesData: IRawData[];
    @Output('outputAlias') change =  new EventEmitter();
    @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef;

    isFuzzy: boolean = false;
    seriesObj: any[] = [];
    customObjs: IUpperData[] = [];
    datafromDashboardWidget: IRawData[] = [];

    constructor() { }

    remapObj(): void {
        this.customObjs = this.datafromDashboardWidget.map((obj) => {
            const propertyUpper = {
                upperStart: obj.upperStart,
                upperTop1: obj.upperTop1,
                upperTop2: obj.upperTop2,
                upperEnd: obj.upperEnd
            }
            return propertyUpper;
        });
        this.seriesMaker();
    }

    calcFuzzyArea(): IFuzzyArea[] {
        const pxMarginLeft = 50;
        let upperEndHigh: any;
        let upperStartMedium: any;
        let upperStartLow: any;
        let upperEndMedium: any;
        let upperStartHigh: any;
        
        this.customObjs.forEach((item, index) => {
            if (index === 0) {
                upperEndHigh = this.toPix(item.upperEnd);
                upperStartHigh = this.toPix(item.upperStart);
            }
            if (index > 0) {
                upperStartMedium = this.toPix(this.customObjs[index - 1].upperStart)
                upperEndMedium = this.toPix(this.customObjs[index - 1].upperEnd) 
                upperStartLow = this.toPix(this.customObjs[this.customObjs.length - 1].upperStart) 
            }
        });

        const fuzzyAreaLowWidth: number = upperEndMedium - upperStartLow;
        const fuzzyAreaHighWidth: number = upperEndHigh - upperStartMedium;
        const mediumWidthWrapper = upperEndMedium - upperStartMedium;
        
        const data = this.customObjs.map((el) => {
            return {
                startPoint: pxMarginLeft + this.toPix(el.upperStart),
                isFuzzy: this.isFuzzy,
                fuzzyAreaLowWidth,
                fuzzyAreaHighWidth,
                mediumWidthWrapper
            }
        });
        return data;
    }
     
    toPix(value: number): number {
        const pxMaxWidth = 1024;
        const maxValue = 200000;
        const result = (value * pxMaxWidth) / maxValue;
        return +result.toFixed(0);
    }

    toggleFuzzyArea(): void {
        this.isFuzzy = !this.isFuzzy;

        let dynamicArgs = this.isFuzzy ? this.calcFuzzyArea() : this.isFuzzy;
        this.change.emit(dynamicArgs);

        const btnFuzzyArea = document.getElementsByClassName('fuzzy-area')[0];
        btnFuzzyArea.innerHTML = this.isFuzzy ? 'Hide Fuzzy' : 'Show Fuzzy'
    }

    seriesMaker(): void {
        const data: number[][] = [];
        const marginLeft: number[] = [];
        const marginRight: number[] = [];
        const barsLenght: number[] = [];
        const colors = ['#939391', '#14A0C4', '#939391'];
        const opacity = ['0', '1', '0'];
        const maxValue: number = 200000;

        this.customObjs.forEach((item) => {
            marginLeft.push(this.roundAtmostTwoDecimal(item.upperStart));
            marginRight.push(this.roundAtmostTwoDecimal((maxValue - item.upperEnd)));
            barsLenght.push(this.roundAtmostTwoDecimal((item.upperEnd - item.upperStart)));
        });

        data.push(marginRight, barsLenght, marginLeft);

        this.seriesObj = colors.map((el, index) => {
            return {
                color: el,
                data: data[index],
                opacity: opacity[index]
            }   
        });
        this.chartInit();
    }

    roundAtmostTwoDecimal(arg: number): number {
        const number = +arg.toFixed(2);
        return number;
    }

    chartInit(): void {
        Highcharts.chart(this.container.nativeElement, {
            chart: {
                events: {
                    render: (e) => {
                        console.log('clicked')
                         setTimeout(() => this.toggleFuzzyArea(), 1000)
                        }
                },
                type: 'bar',
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'rgb(96, 96, 96)'],
                        [1, 'rgb(16, 16, 16)']
                    ]
                },
                borderWidth: 0,
                borderRadius: 0,
                plotBackgroundColor: null,
                plotShadow: false,
                plotBorderWidth: 0
            },
            title: {
                style: {
                    color: '#FFF',
                    font: '16px Lucida Grande, Lucida Sans Unicode,' +
                        ' Verdana, Arial, Helvetica, sans-serif'
                },
                text: 'Logical Glue Code Test'
            },
            xAxis: {
                categories: ['Low', 'Medium', 'High'],
                labels: {
                    style: {
                        color: '#999',
                        fontWeight: 'bold'
                    }
                }
            },
            yAxis: {
                max: 200000,
            },
            legend: {
                reversed: true
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: 'overlap',
                    showInLegend: false
                }
            },
            series: this.seriesObj,
        });
    }

    ngOnChanges(change: SimpleChanges): void {
        if (change.seriesData) {
            const seriesData = change.seriesData.currentValue;
            this.datafromDashboardWidget = seriesData;
            this.remapObj();
        }
    }
}
