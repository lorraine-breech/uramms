import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { UserWToken } from '../shared/models/user-with-token';
import { User } from '../shared/models/user';
import { StudentService } from '../shared/services/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  private user: User;
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.get('password').value;

    console.log("WELCOME!");
    this.authService.logIn(username, password)
      .subscribe(user => {
        if(user){
          let userWT = new UserWToken(user);
          this.userService.setCurrentUser(new User(userWT.getUser()));
          this.userService.setJWToken(new String(userWT.getToken()));

          this.user = new User(this.userService.getCurrentUser());
          //subscribe to get specific user document      
          let userType = this.user.getUserType();
          
          if(userType == 'student'){

            this.studentService.getStudent('5eb58c5c5389972040fbf46b')
             .subscribe( data => {
             console.log(JSON.stringify(data));
            }); 

          } else if(userType == 'professor'){

            
          }

          
          this.redirect();
        } else{
          console.log("Auth Failed");
        }
      });
  }

  private redirect(){
    let redirectUrl = '/login';
    let userType = 'student';
    //let userType = this.user.getUserType();
    
    if(userType == 'student'){
      redirectUrl = '/student/requests';
    } else if(userType == 'panel member'){
      redirectUrl = '/panel-member/requests';  
    }

    // Set our navigation extras object
    // that passes on our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };

    // Redirect the user
    this.router.navigate([redirectUrl], navigationExtras);
  }
}
