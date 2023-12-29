import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent {
  constructor(private router:Router){}
  home(){
    this.router.navigate(['/'])
  }
}
