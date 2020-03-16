import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRatesComponent } from './index-rates.component';
import { TableComponent } from '../table/table.component';
import { ExchangeRatesService } from '../../services/exchange-rates.service';
import { HttpModule } from '@angular/http';

describe('IndexRatesComponent', () => {
    let component: IndexRatesComponent;
    let fixture: ComponentFixture<IndexRatesComponent>;
    let service: ExchangeRatesService

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IndexRatesComponent, TableComponent],
            providers: [ExchangeRatesService],
            imports: [HttpModule]
        });

        fixture = TestBed.createComponent(IndexRatesComponent);
        component = fixture.componentInstance;
        service = TestBed.get(ExchangeRatesService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set all properties with the values generated randmoly inside the server', () => {
        // ACT
        component.getNewRates()
        // ASSERTETION
        expect(component.ratesIndex.length).toEqual(2);
    });
});
