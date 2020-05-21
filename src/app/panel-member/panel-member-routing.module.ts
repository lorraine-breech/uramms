import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PanelMemberComponent } from './panel-member.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { RequestDetailComponent } from './pages/requests/request-detail/request-detail.component';

const panelmemberRoutes: Routes = [
  {
    path: '',
    component: PanelMemberComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { 
            path: 'requests', 
            component: RequestsComponent,
            children:[
              { path: '', 
                component: RequestListComponent,
                children: [
                  { path: ':id', component: RequestDetailComponent }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(panelmemberRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PanelMemberRoutingModule { }
