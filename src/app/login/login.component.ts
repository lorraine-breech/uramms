import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
