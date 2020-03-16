import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';

fdescribe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent, TableComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
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

        component.addToBasket(fakeItem, index)

        expect(itemsInBasket).not.toBeNull();
    });

    it('should extract data from input', () => {

        const directionChanges = [{
            prefix: 'string',
            iconName: 'string',
            icon: []
        }];

        component.ngOnChanges({
            directionChanges: new SimpleChange(null,directionChanges, false)
        })

        fixture.detectChanges();

        expect(component.directionChanges).not.toBeNull()
    });


});
