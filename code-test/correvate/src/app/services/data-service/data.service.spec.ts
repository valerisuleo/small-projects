import { DataService } from './data.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [{ provide: String, useValue: "dummy_value" }],
        });
    });

    it('should be created', inject([DataService], (service: DataService) => {
        expect(service).toBeTruthy();
    }));
});