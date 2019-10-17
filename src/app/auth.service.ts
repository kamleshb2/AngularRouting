import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedInStatus:boolean = false;

  constructor() { }

  isValid(username: string, password: string){

    if(username == 'admin' && password == 'admin'){
      return true;
    }

    return false;
  }

  setLoggedIn(isValidUser : boolean){
    
    sessionStorage.setItem("loggedInStatus",isValidUser.toString());
  }

  getLoggedIn(){
    return JSON.parse(sessionStorage.getItem("loggedInStatus"));
  }
}
