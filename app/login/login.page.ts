import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
userName:any;
password:any;
  constructor(public alertCtrl:AlertController,
              private  router:Router) { }

  ngOnInit() {
  }
 async submit(){
    if(this.userName== 123  && this.password=='password'){
      localStorage.setItem('name',this.userName)
      this.router.navigateByUrl("\home")

    }
    else if(this.userName =='1234' && this.password=='password'){
      this.router.navigateByUrl("\home")

      localStorage.setItem('name',this.userName)
    }
    else if (this.userName == '3456'  && this.password=='password'){
      this.router.navigateByUrl("\home")

      localStorage.setItem('name',this.userName)
    }
    else if(this.userName == '7890'  && this.password=='password'){
      this.router.navigateByUrl("\home")

      localStorage.setItem('name',this.userName)
    }
    else {
const modal =await this.alertCtrl.create({
  header:'Error',
  message:'Invalid User Name and Password',
  mode:'ios',

  buttons:[{
    text:'Ok'
  }]
})
modal.present()
    }
    console.log(this.userName,this.password)
  }
}
