import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMemberTopbarComponent } from './panel-member-topbar.component';

describe('PanelMemberTopbarComponent', () => {
  let component: PanelMemberTopbarComponent;
  let fixture: ComponentFixture<PanelMemberTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMemberTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMemberTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
