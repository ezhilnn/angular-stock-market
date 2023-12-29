import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  maxDate!: Date;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18)
  }
  onSubmit(f:NgForm){
    console.log(f.value);
    this.authService.registerUser({
      email:f.value.email,
      password:f.value.password
    }) 
  }
}
