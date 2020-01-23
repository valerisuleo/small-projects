import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
    let component: BarChartComponent;
    let fixture: ComponentFixture<BarChartComponent>;

    const dummyData = [
        {
            name: 'Low',
            lowerStart: 4000.0,
            lowerTop1: 4000.0,
            lowerTop2: 33600.0,
            lowerEnd: 43800.0,
            upperStart: 4000.0,
            upperTop1: 4000.0,
            upperTop2: 33600.0,
            upperEnd: 54000.0
        },
        {
            name: 'Medium',
            lowerStart: 43800.0,
            lowerTop1: 54000.0,
            lowerTop2: 65000.0,
            lowerEnd: 79000.0,
            upperStart: 33600.0,
            upperTop1: 54000.0,
            upperTop2: 65000.0,
            upperEnd: 100997.14285714287
        },
        {
            name: 'High',
            lowerStart: 79000.0,
            lowerTop1: 100997.14285714287,
            lowerTop2: 200000.0,
            lowerEnd: 200000.0,
            upperStart: 65000.0,
            upperTop1: 100997.14285714287,
            upperTop2: 200000.0,
            upperEnd: 200000.0
        }
    ]

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BarChartComponent],
        });
        fixture = TestBed.createComponent(BarChartComponent);
        component = fixture.componentInstance;
        fixture.debugElement
        component.datafromDashboardWidget = dummyData;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should extract data from input', () => {
        expect(component.datafromDashboardWidget.length).not.toBe(undefined);
    });
    
    it('should contain only upper properties', () => {
        component.remapObj();
        expect(component.customObjs).not.toEqual(jasmine.objectContaining({
            name: 'High',
            lowerStart: 79000.0,
            lowerTop1: 100997.14285714287,
            lowerTop2: 200000.0,
            lowerEnd: 200000.0,
            upperStart: 65000.0,
            upperTop1: 100997.14285714287,
            upperTop2: 200000.0,
            upperEnd: 200000.0
        }))
    });

    it('should add a the "toggled" class to the btn if isFuzzy === true', () => {
        component.isFuzzy = true;
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.fuzzy-area'));
        let el: HTMLElement = de.nativeElement;
        expect(el.classList.contains('toggled')).toBeTruthy();
    });

});
