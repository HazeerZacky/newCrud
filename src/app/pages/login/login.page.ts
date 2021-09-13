import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
//import { error } from 'console';
import { Login } from 'src/app/interfaces/login';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: Login = {
    'email':'',
    'password': ''
  }

  constructor(private auth: AuthenticationService,
    private router: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  signin(){
    this.auth.signin(this.login).then(async (res) => {
      console.log(res);
      
      if(res.user.email){
        this.auth.setItem(res);
         const tost =  this.toastCtrl.create({
            message: 'Successfully Login',
            position: 'bottom',
            duration: 4000,
            
          });
  
          (await tost).present();
        this.router.navigateByUrl('home');
      }
    }).catch(async error => {
      console.log(error.code);

      const t = this.toastCtrl.create({
        message: error.code,
        position:'bottom',
        duration: 1000
      });

      (await t).present();
      
    });
  }

}
