import { Component, OnInit } from '@angular/core';
import { Consult } from '../consult';
import { ConsultService } from '../consult.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  consult:Consult = new Consult()
  constructor(private service:ConsultService) { }

  ngOnInit(): void {
  }
  addnewconsulting(){
    this.service.consultuser(this.consult).subscribe(Data =>{
      console.log(Data);
      alert('Successfully saved');

      
  },
  error=>console.log(error))
}

  onSubmit(){
    console.log(this.consult);
    this.addnewconsulting() ;
  }
  
}

