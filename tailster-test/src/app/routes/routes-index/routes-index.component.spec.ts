import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesIndexComponent } from './routes-index.component';

describe('RoutesIndexComponent', () => {
  let component: RoutesIndexComponent;
  let fixture: ComponentFixture<RoutesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
