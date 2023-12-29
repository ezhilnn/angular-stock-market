import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router,private authServie:AuthService){}
  // @Output() log=new EventEmitter<boolean>();
  onSubmit(f:NgForm){
    // if(f.value.email==='email@email.com' && f.value.password==='password'){
    //   this.auth.loggedIn=true;
    //   this.router.navigate(['/']);
    // }
    // else{
    //   alert("please enter valid credentials");
    // }
    // console.log(this.auth.loggedIn);
    console.log(f.value.email);
    console.log(f.value.password);
    this.authServie.login({
      email:f.value.email,
      password:f.value.password
    })
  }
  

  signup(){
    this.router.navigate(['/signup'])
  }
}
