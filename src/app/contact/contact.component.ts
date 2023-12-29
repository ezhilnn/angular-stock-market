import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  exportAs:'ngform'
})
export class ContactComponent {
  username='';
  useremail='';
  userquery='';
  form!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){
    this.form=this.fb.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email:['',[Validators.required,Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      query:['',[Validators.required]]
    })
  }
  get fc(){
    return this.form.controls;
  }
  contact(){
    alert("Your query submitted successfully and we will contact you Soon!");
  }
  home(){
    this.router.navigate(['/'])
  }
  onsubmit(f:any){
    console.log(f);
  }
  get Name(){
    return this.form.get('name');
  }
  get Email(){
    return this.form.get('email')
  }
  get Query(){
    return this.form.get('query');
  }
}
