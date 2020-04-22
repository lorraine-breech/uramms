import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMemberComponent } from './panel-member.component';
import { PanelMemberRoutingModule } from './panel-member-routing.module';
import { PanelMemberTopbarComponent } from './panel-member-topbar/panel-member-topbar.component';



@NgModule({
  declarations: [
    PanelMemberComponent,
    PanelMemberTopbarComponent
  
  ],
  imports: [
    CommonModule,
    PanelMemberRoutingModule
  ]
})
export class PanelMemberModule { }
