import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireauth: AngularFireAuth) { }

  signin(login: Login){
    return this.fireauth.signInWithEmailAndPassword(login.email, login.password);
   
    
  }
  setItem(res){
    //console.log(res.user);
    
  localStorage.setItem('user',res);
  }

  getItem(){
    localStorage.getItem('user');
  }
}
