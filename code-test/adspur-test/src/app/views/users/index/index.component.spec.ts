import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser'
import { RouterLinkWithHref } from '@angular/router';
import { from, throwError } from 'rxjs';
import { IndexComponent } from './index.component';
import { UsersService } from '../../../services/users.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import fakeUserService from '../../../services/user-service-mock';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;
    let service: UsersService

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IndexComponent],
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
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        service = TestBed.get(UsersService);
        fixture.debugElement
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('indexUsers', () => {
        it('should set all property with the item returned from the server', () => {
            // ARRANGE
            spyOn(service, 'getAll').and.callFake(() => {
                const obs = from([fakeUserService]);
                return obs;
            })
            // ACT
            fixture.detectChanges();            
            // ASSERTETION
            expect(component.users.length).toEqual(6);
        });

        it('should throw an error if something wrong', () => {
            // ARRANGE
            const spy = spyOn(component, 'showError');
            spyOn(service, 'getAll').and.returnValue(throwError('ooops'));
            // ACT
            fixture.detectChanges()
            // ASSERTETION
            expect(spy).toHaveBeenCalled();
        });
    });

    it('should have a link to users page', () => {
        let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));        
        let index = de.findIndex(de => de.properties['href'] === '/users');
        expect(index).toBe(-1);
    });
});
