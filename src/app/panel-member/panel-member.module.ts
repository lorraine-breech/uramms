import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMemberComponent } from './panel-member.component';
import { PanelMemberRoutingModule } from './panel-member-routing.module';
import { PanelMemberTopbarComponent } from './panel-member-topbar/panel-member-topbar.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { RequestDetailComponent } from './pages/requests/request-detail/request-detail.component';
import { MyCalendarComponent } from './pages/my-calendar/my-calendar.component';



@NgModule({
  declarations: [
    PanelMemberComponent,
    PanelMemberTopbarComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailComponent,
    MyCalendarComponent
  
  ],
  imports: [
    CommonModule,
    PanelMemberRoutingModule
  ]
})
export class PanelMemberModule { }
