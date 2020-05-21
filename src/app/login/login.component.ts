import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { UserWToken } from '../shared/models/user-with-token';
import { User } from '../shared/models/user';


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
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.get('password').value;

    console.log("WELCOME!");
    this.userService.logIn(username, password)
      .subscribe(user => {
        if(user){
          let userWT = new UserWToken(user);
          this.user = new User(userWT.getUser());
          console.log("Log In component Token: " + userWT.token);
          console.log("Username: " + this.user.getUsername());

          //subscribe to get specific user document
          //check userType
          //get the specific user document with the appropiate service
        } else{
          console.log("Auth Failed");
        }
      })

    //login function here

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/student`.
        const redirectUrl = '/student/requests';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }
}
