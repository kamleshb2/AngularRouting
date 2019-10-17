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
  constructor(private route:Router, private auth: AuthService) { }

  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(): void{
    console.log(this.loginForm.value);
    if(this.auth.isValid(this.loginForm.value.username, this.loginForm.value.password)){
      this.route.navigate(['/about']);
    }
    
  }



}
