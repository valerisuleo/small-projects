import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    const dummyRatesIndex = [1.2345, 0.2345];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent, TableComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.ratesIndex = dummyRatesIndex;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should raise basketChanged when click', () => {
        let index = 2;
        const fakeItem = {
            event: 'add',
            item: 1.2345,
            index
        }
        let itemsInBasket = null;
        component.click.subscribe(el => itemsInBasket = el);

        component.addToBasket(fakeItem, index);

        expect(itemsInBasket).not.toBeNull();
    });

    it('should call setDirections method OnChanges', () => {
        const setDirections: jasmine.Spy = spyOn(component, 'setDirections');

        component.ngOnChanges(component.ratesIndex);

        expect(setDirections).toHaveBeenCalled();
        expect(component.directionChanges.length).toBeGreaterThanOrEqual(0);
    });
});
