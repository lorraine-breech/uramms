import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperuserTopbarComponent } from './superuser-topbar/superuser-topbar.component';
import { SuperuserComponent } from './superuser.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { SuperuserRoutingModule } from './superuser-routing.module';
import { ProfessorsComponent } from './pages/professors/professors.component';
import { SuperusersComponent } from './pages/superusers/superusers.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';



@NgModule({
  declarations: [
    SuperuserTopbarComponent,
    SuperuserComponent,
    StudentsComponent,
    StudentListComponent,
    ProfessorsComponent,
    SuperusersComponent,
    ActivityLogComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule
  ]
})
export class SuperuserModule { }
