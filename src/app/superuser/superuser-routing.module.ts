import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuperuserComponent } from './superuser.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { StudentsComponent } from './pages/students/students.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { ProfessorsComponent } from './pages/professors/professors.component';
import { SuperusersComponent } from './pages/superusers/superusers.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';

const superuserRoutes: Routes = [
  { 
    path: '',
    component: SuperuserComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { 
            path: 'students', 
            component: StudentsComponent,
            children: [
              { path: '', component: StudentListComponent }
            ] 
          },
          { path: 'professprs', component: ProfessorsComponent },
          { path: 'superusers', component: SuperusersComponent },
          { path: 'activity-log', component: ActivityLogComponent }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(superuserRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SuperuserRoutingModule { }
