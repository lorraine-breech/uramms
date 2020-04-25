import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentTopbarComponent } from './student-topbar/student-topbar.component';
import { StudentComponent } from './student.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { RequestDetailComponent } from './pages/requests/request-detail/request-detail.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { MaterialModule } from '../material.module';
import { MyStudyComponent } from './pages/my-study/my-study.component';
import { MyPanelComponent } from './pages/my-panel/my-panel.component';
import { MyCalendarComponent } from './pages/my-calendar/my-calendar.component';



@NgModule({
  declarations: [
    StudentTopbarComponent, 
    StudentComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailComponent,
    MyStudyComponent,
    MyPanelComponent,
    MyCalendarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule
  ]
})
export class StudentModule { }
