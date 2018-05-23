import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdispezioneComponent } from './cdispezione.component';

describe('CdispezioneComponent', () => {
  let component: CdispezioneComponent;
  let fixture: ComponentFixture<CdispezioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdispezioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdispezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
