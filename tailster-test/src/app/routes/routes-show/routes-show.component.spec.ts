import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesShowComponent } from './routes-show.component';

describe('RoutesShowComponent', () => {
  let component: RoutesShowComponent;
  let fixture: ComponentFixture<RoutesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
