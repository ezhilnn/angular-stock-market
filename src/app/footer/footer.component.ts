import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router:Router){}
  Contact(){
    this.router.navigate(['/contact']);
  }
  terms(){
    this.router.navigate(['/terms']);
  }
}