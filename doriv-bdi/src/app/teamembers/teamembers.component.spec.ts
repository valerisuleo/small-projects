import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamembersComponent } from './teamembers.component';

describe('TeamembersComponent', () => {
  let component: TeamembersComponent;
  let fixture: ComponentFixture<TeamembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
