import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { MyCalendarComponent } from './pages/my-calendar/my-calendar.component';
import { MyStudyComponent } from './pages/my-study/my-study.component';
import { MyPanelComponent } from './pages/my-panel/my-panel.component';
import { RequestDetailsComponent } from './pages/requests/request-details/request-details.component';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { 
            path: 'requests', 
            component: RequestsComponent,
            children: [
              { path: '', component: RequestListComponent, data: { animation: 'requests' } },
              { path: 'request/:id', component:RequestDetailsComponent, data: { animation: 'request'} }
            ]
          },
          { path: 'my-calendar', component: MyCalendarComponent },
          { path: 'my-study', component: MyStudyComponent },
          { path: 'my-panel', component: MyPanelComponent }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
