import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserTopbarComponent } from './superuser-topbar.component';

describe('SuperuserTopbarComponent', () => {
  let component: SuperuserTopbarComponent;
  let fixture: ComponentFixture<SuperuserTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
