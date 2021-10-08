import { TestBed, inject } from '@angular/core/testing';
import { PetService } from './pet.service';
import { HttpModule } from '@angular/http';

describe('PetService', () => {
    let service: PetService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PetService]
        });
    });

    it('should be created', inject([PetService], (service: PetService) => {
        expect(service).toBeTruthy();
    }));
});