import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from './../login-status.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  msg:string="";
  loginStatus:boolean;
  constructor(private loginStatusService:LoginStatusService) 
  {
    this.loginStatus = this.loginStatusService.isLoggedIn;
  }

  CheckLogin(txt1)
  {
    if(this.username == "admin" && this.password == "manager")
    {
      this.msg = "Successful login";
      this.loginStatusService.isLoggedIn = true;
      this.loginStatus = true;
    }
    else
    {
      this.msg = "Invalid Login";
      this.loginStatusService.isLoggedIn = false;
      this.loginStatus = false;
      txt1.focus();
    }
  }
 Logout()
 {
   this.loginStatusService.isLoggedIn = false;
   this.loginStatus = false;
 }
  ngOnInit() {
  }

}
