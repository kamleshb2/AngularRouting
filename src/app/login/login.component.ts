import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {  Router } from '@angular/router';
import{AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValidUser:boolean;

  constructor(private route:Router, private auth: AuthService) { }

  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(): void{
    console.log(this.loginForm.value);
    
    this.isValidUser = this.auth.isValid(this.loginForm.value.username, this.loginForm.value.password)
    this.auth.setLoggedIn(this.isValidUser)
    this.route.navigate(['/about']);
    
    
  }



}
