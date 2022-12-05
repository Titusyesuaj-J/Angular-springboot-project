import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  register:Register = new Register()
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  addnewuser(){
    this.service.registerUser(this.register).subscribe(Data =>{
      console.log(Data);
      alert('Successfully saved');
  },
  error=>console.log(error))
}

  onSubmit(){
    console.log(this.register);
    this.addnewuser() ;
    this.gotohomepage();
  }

  gotohomepage(){
    this.router.navigate(['/Home']);
  }
  
  gotologin(){
    this.router.navigate(['/login-employee']);
  }
}

