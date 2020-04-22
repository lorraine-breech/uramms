import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentTopbarComponent } from './student-topbar/student-topbar.component';



@NgModule({
  declarations: [StudentTopbarComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
