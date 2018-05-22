import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapogruppoComponent } from './capogruppo.component';

describe('CapogruppoComponent', () => {
  let component: CapogruppoComponent;
  let fixture: ComponentFixture<CapogruppoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapogruppoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapogruppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
