import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperuserTopbarComponent } from './superuser-topbar/superuser-topbar.component';
import { SuperuserComponent } from './superuser.component';



@NgModule({
  declarations: [
    SuperuserTopbarComponent,
    SuperuserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuperuserModule { }
