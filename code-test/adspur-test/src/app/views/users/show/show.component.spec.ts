import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponent } from './show.component';
import { UsersService } from '../../../services/users.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';

describe('ShowComponent', () => {
    let component: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;
    let service: UsersService

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShowComponent],
            schemas:[
                CUSTOM_ELEMENTS_SCHEMA
            ],
            providers: [
                UsersService,
                ToastrService
            ],
            imports: [
                HttpModule,
                RouterTestingModule,
                ToastrModule.forRoot()
            ]
        });
        fixture = TestBed.createComponent(ShowComponent);
        component = fixture.componentInstance;
        service = TestBed.get(UsersService);
        fixture.debugElement
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should redirect user to routes onClick', () => {
        // ASSERT
        let router = TestBed.get(Router)
        let spy = spyOn(router, 'navigate');
        // ACT
        component.navigateTo();
        // EXPECT
        expect(spy).toHaveBeenCalledWith(['/users'])
    });

    it('should throw an error if something wrong', () => {
        // ARRANGE
        const spy = spyOn(component, 'showError');
        spyOn(service, 'getItem').and.returnValue(throwError('ooops'));
        // ACT
        fixture.detectChanges()
        // ASSERTETION
        expect(spy).toHaveBeenCalled();
    });
});
