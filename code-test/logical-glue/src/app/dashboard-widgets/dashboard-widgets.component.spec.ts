import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardWidgetsComponent } from './dashboard-widgets.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartService } from '../services/chart.service';

describe('DashboardWidgetsComponent', () => {
    let component: DashboardWidgetsComponent;
    let fixture: ComponentFixture<DashboardWidgetsComponent>;
    let service: ChartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardWidgetsComponent,
                BarChartComponent
            ],
            providers: [ChartService]
        });
        fixture = TestBed.createComponent(DashboardWidgetsComponent);
        component = fixture.componentInstance;
        service = TestBed.get(ChartService);
        fixture.debugElement
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getAll', () => {
        it('should set all property with the item returned from the server', () => {
            // NOTE: I am not implementing any Stubs, callFake or returnValue... becuase we are not dealing with a real async data.
            component.ngOnInit();
            expect(component.seriesData.length).toBe(3);
        });
    });
});
