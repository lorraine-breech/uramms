import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-student-topbar',
  templateUrl: './student-topbar.component.html',
  styleUrls: ['./student-topbar.component.scss']
})
export class StudentTopbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  logout(){
    this.authService.logOut();
  }
}
