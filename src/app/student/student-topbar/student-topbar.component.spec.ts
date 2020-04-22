import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTopbarComponent } from './student-topbar.component';

describe('StudentTopbarComponent', () => {
  let component: StudentTopbarComponent;
  let fixture: ComponentFixture<StudentTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
