import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutesIndexComponent } from './routes-index.component';
import { RoutesService } from '../../services/routes.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser'
import { RouterLinkWithHref } from '@angular/router';
import { from, EMPTY, throwError } from 'rxjs';

const fakeRouteService = [
    {
        "altitude": 5,
        "latitude": 51.51924404320448,
        "longitude": -0.1230693049730017
    },
    {
        "altitude": 2,
        "latitude": 51.51906291027694,
        "longitude": -0.1231040898711636
    },
    {
        "altitude": 3,
        "latitude": 51.51889053643822,
        "longitude": -0.1232034154237464
    },
    {
        "altitude": 1,
        "latitude": 51.51880122725993,
        "longitude": -0.1229499466718388
    },
    {
        "altitude": 2,
        "latitude": 51.51878693611502,
        "longitude": -0.1226598490030716
    }
];

describe('RoutesIndexComponent', () => {
    let component: RoutesIndexComponent;
    let fixture: ComponentFixture<RoutesIndexComponent>;
    let service: RoutesService

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RoutesIndexComponent],
            providers: [
                RoutesService
            ],
            imports: [
                HttpModule,
                RouterTestingModule
            ]
        });
        fixture = TestBed.createComponent(RoutesIndexComponent);
        component = fixture.componentInstance;
        service = TestBed.get(RoutesService);
        fixture.debugElement
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    fdescribe('indexRoutes', () => {
        it('should set all property with the item restured from the server', () => {
            // ARRANGE
            spyOn(service, 'getAll').and.callFake(() => {
                const obs = from([fakeRouteService]);
                return obs;
            })
            // ACT
            fixture.detectChanges();
            // ASSERTETION
            expect(component.routes.length).toEqual(5);
        });

        it('should throw an error if something wrong', () => {
            // ARRANGE
            let error = 'Ooops! Something went wrong...';
            spyOn(service, 'getAll').and.returnValue(throwError(error));
            // ACT
            fixture.detectChanges()
            // ASSERTETION
            expect(component.errorMsg).toBe(error);
        });
    });
  
    it('should have a link to routes page', () => {
        let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));        
        let index = de.findIndex(de => de.properties['href'] === '/routes');
        expect(index).toBe(-1);
    });
});
