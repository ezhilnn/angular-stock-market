import { Component, OnDestroy, OnInit } from '@angular/core';
import { StockInterface,StocksService } from './services/stocks.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy{
  // title = 'stocks';
  // stocks: Array<StockInterface> = [];
  // constructor(service:StocksService){
  //   service.load(['APPLE']).subscribe(stocks=>{
  //     this.stocks=stocks;
  //   });
  // }
  isAuth: boolean = false;
  authSubscripion!: Subscription;
  constructor(private router:Router,private authService:AuthService){
  }
  
  ngOnInit(): void {
      this.authSubscripion=this.authService.authChange.subscribe(authStatus=>{
        this.isAuth=authStatus;
      })
  }
  onLogOut(){
    this.authService.logout();
    console.log(this.isAuth);
  }
  // logIn=true;
  // isLogged(){
  //   this.logIn=!this.logIn;
  // }
  ngOnDestroy(): void {
    this.authSubscripion.unsubscribe();
  }
  home(){
    this.router.navigate(['/'])
  }
}
