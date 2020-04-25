import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'student', 
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canLoad: [AuthGuard]
  },
  { 
    path: 'superuser', 
    loadChildren: () => import('./superuser/superuser.module').then(m=>m.SuperuserModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'panel-member',
    loadChildren: () => import('./panel-member/panel-member.module').then(m=>m.PanelMemberModule),
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
