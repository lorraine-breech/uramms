import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperusersComponent } from './superusers.component';

describe('SuperusersComponent', () => {
  let component: SuperusersComponent;
  let fixture: ComponentFixture<SuperusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
