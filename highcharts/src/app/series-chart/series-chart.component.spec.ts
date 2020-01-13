import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesChartComponent } from './series-chart.component';
import { ChartService } from '../services/chart.service';
import { from, of, Observable } from 'rxjs';
import { and } from '@angular/router/src/utils/collection';


const dummy = {
    id: 'homepage-downloads-revenue-chart',
    element: '#homepage-downloads-revenue-chart',
    data: [
        {
            name: 'appscatter.store-sales-revenue-converted',
            timestamps: [
                '2019-11-01T00:00:00Z',
                '2019-11-02T00:00:00Z',
            ],
            values: [
                234,
                123,
            ]
        },
        {
            name: 'appscatter.store-sales-downloads',
            timestamps: [
                '2019-11-01T00:00:00Z',
                '2019-11-02T00:00:00Z',
            ],
            values: [
                134,
                223,
            ]
        }
    ],
    hideHeader: true,
    legend: {
        enabled: false
    },
    grid: {
        showXGrid: false,
        showYGrid: true
    },
    tooltip: {

    },
    chartCursor: {
        enabled: true,
        fullWidth: true,
        cursorColor: '#7494B2',
        cursorAlpha: 0.1,
        categoryBalloonEnabled: true
    },
    graphs: [
        {
            graphType: 'LINE',
            color: '#7DC855',
            bullet: 'none'
        },
        {
            graphType: 'LINE',
            color: '#358ed7',
            bullet: 'none'
        }
    ],
    styles: {
        gridXColor: '#E6EAEE',
        gridYColor: '#E6EAEE',
        backgroundColor: '#FAFAFA',
        axisValueColor: '#86939E'
    }
}




fdescribe('SeriesChartComponent', () => {
    let component: SeriesChartComponent;
    let fixture: ComponentFixture<SeriesChartComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SeriesChartComponent],
            providers: [
                ChartService
            ]
        });
        fixture = TestBed.createComponent(SeriesChartComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create', () => {

        let service = TestBed.get(ChartService);
        spyOn(service, 'getSeriesData').and.returnValue(from([dummy.data]));
        fixture.detectChanges();



        expect(component.widgetsData.length).toBe(2);



    });

    // it('should call getAll onInit', () => {
    //     const getAll = spyOn(component, "getAll");
    //     component.ngOnInit();
    //     expect(getAll).toHaveBeenCalled();
    // });

    // it('should call remapObj as callback', () => {
    //     const remapObj = spyOn(component, "remapObj");
    //     component.getAll();
    //     expect(remapObj).toHaveBeenCalled();
    // });

    // it('should call the date formatter method', () => {
    //     spyOn(service, 'getSeriesData').and.callFake(() => {
    //         const obs = of(dummy);
    //         return obs;
    //     });
    // });


    // it('should call remapObj as callback', () => {
    //     component.remapObj();
    //     expect(Object.keys(component.seriesObj[0])).toContain('name');
    //     expect(Object.keys(component.seriesObj[0])).toContain('data');
    //     expect(Object.keys(component.seriesObj[0])).toContain('color');
    //     expect(Object.keys(component.seriesObj[0])).toContain('type');
    // });

    // it('should call the date formatter method', () => {
    //     const spy = spyOn(component, "dateFormatter");
    //     component.remapObj();
    //     expect(spy).toHaveBeenCalled();
    // });
});


