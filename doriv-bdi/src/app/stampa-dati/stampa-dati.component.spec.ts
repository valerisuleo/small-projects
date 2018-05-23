import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampaDatiComponent } from './stampa-dati.component';

describe('StampaDatiComponent', () => {
  let component: StampaDatiComponent;
  let fixture: ComponentFixture<StampaDatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampaDatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampaDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
