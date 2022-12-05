import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  login:Login = new Login();
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginpage(){
    this.service.loginUser(this.login).subscribe(data=>{
      console.log(this.login);
      alert("Login successfull")
      this.gotohomepage();
    },
    error=>alert("invalid login credentials"))
  }

  gotohomepage(){
    this.router.navigate(['/Home']);
  }

  onSubmit(){
    console.log(this.login);
    this.loginpage();
  }
  register(){
    this.router.navigate(['/Userregister']);
  }

}
