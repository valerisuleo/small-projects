import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RoutesShowComponent } from './routes-show.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
import { Router, ActivatedRoute, convertToParamMap, } from '@angular/router';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

class RouterStub {
    navigate(params) {
    }
}

describe('RoutesShowComponent', () => {
    let component: RoutesShowComponent;
    let fixture: ComponentFixture<RoutesShowComponent>;
    let service: RoutesService

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                RoutesShowComponent,
                GmapsComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            providers: [
                RoutesService,
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useValue: {
                    snapshot: {
                        paramMap: convertToParamMap({ id: 1 })
                    }
                } }
            ],
            imports: [
                HttpModule
            ]
        });
        fixture = TestBed.createComponent(RoutesShowComponent);
        component = fixture.componentInstance;
        service = TestBed.get(RoutesService);
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
        component.takeMeHome();
        // EXPECT
        expect(spy).toHaveBeenCalledWith(['/routes'])
    });

    it('should increase tot votes when click upVote btn', () => {
        let btn = fixture.debugElement.query(By.css('.current-location'));

        btn.triggerEventHandler('click', null);

        expect(component.isClicked).toBeTruthy();
    });
});
