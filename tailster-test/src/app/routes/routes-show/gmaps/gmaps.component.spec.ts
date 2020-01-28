import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapsComponent } from './gmaps.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoutesService } from '../../../services/routes.service';
import { HttpModule } from '@angular/http';

describe('GmapsComponent', () => {
  let component: GmapsComponent;
  let fixture: ComponentFixture<GmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapsComponent ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ],
        providers: [RoutesService],
        imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
