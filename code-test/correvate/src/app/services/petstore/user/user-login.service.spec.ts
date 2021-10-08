import { UserLoginService } from './user-login.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

describe('UserLoginService', () => {
    let service: UserLoginService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [UserLoginService]
        });
    });

    it('should be created', inject([UserLoginService], (service: UserLoginService) => {
        expect(service).toBeTruthy();
    }));
});