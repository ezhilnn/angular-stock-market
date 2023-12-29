import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrl: './add-stocks.component.css'
})
export class AddStocksComponent {
  constructor(private service: StocksService){

  }
  symbol='';
  lastTraded!:number;
  change!:number;
  changeinPercent!:number;
  onSubmit(f:NgForm){
    this.symbol=f.value.stock;
    this.lastTraded=f.value.lastTradedPrice;
    this.change=f.value.change;
    this.changeinPercent=f.value.changeInPercent;
    this.service.stocksData.push({
      symbol: this.symbol, lastTradePriceOnly: this.lastTraded, change: this.change, changeInPercent: this.changeinPercent
    })
    console.log(f.value);
    console.log(f.value.stock);
    console.log(f.value.lastTradedPrice);
  }
}
