import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  private stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR','IBM','TSLA','MSFT','NVDA','VISA','JPMRG','NFLX'];
  private service: string = 'http://localhost:3000';
  stocksData:StockInterface[] = [
    { symbol: 'AAPL', lastTradePriceOnly: 150.25, change: 2.5, changeInPercent: 1.7 },
    { symbol: 'GOOG', lastTradePriceOnly: 2700.0, change: -5.75, changeInPercent: -0.21 },
    { symbol: 'FB', lastTradePriceOnly: 330.75, change: 1.25, changeInPercent: 0.38 },
    { symbol: 'AMZN', lastTradePriceOnly: 3450.0, change: -15.0, changeInPercent: -0.43 },
    { symbol: 'TWTR', lastTradePriceOnly: 50.5, change: 0.1, changeInPercent: 0.2 },
    { symbol: 'IBM', lastTradePriceOnly: 135.25, change: 2.75, changeInPercent: 2.08 },
    { symbol: 'TSLA', lastTradePriceOnly: 950.60, change: -5.25, changeInPercent: -0.55 },
    { symbol: 'MSFT', lastTradePriceOnly: 320.80, change: 1.20, changeInPercent: 0.38 },
    { symbol: 'NVDA', lastTradePriceOnly: 280.45, change: -3.10, changeInPercent: -1.09 },
    { symbol: 'VISA', lastTradePriceOnly: 220.75, change: 0.60, changeInPercent: 0.27 },
    { symbol: 'JPMRG', lastTradePriceOnly: 150.90, change: -1.45, changeInPercent: -0.95 },
    {
      symbol: 'NFLX',
      lastTradePriceOnly: 550.25,
      change: -3.75,
      changeInPercent: -0.68
    },
    { symbol: 'TCS', lastTradePriceOnly: 3200.0, change: 10.5, changeInPercent: 0.33 },
  { symbol: 'INTL', lastTradePriceOnly: 45.25, change: -2.75, changeInPercent: -5.72 },
  { symbol: 'ORCL', lastTradePriceOnly: 85.0, change: 1.0, changeInPercent: 1.19 },
  { symbol: 'SPCX', lastTradePriceOnly: 20.5, change: 0.25, changeInPercent: 1.23 }
  
  ];

  constructor() {}

  get() {
    return this.stocks;
  }

  add(stock: string) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load() {
    return this.stocksData;
  }
  amountInvested=200500;
  currentAmount=268000.8596;
  totalReturns=this.currentAmount-this.amountInvested;
  totalReturnsPercent=(this.currentAmount-this.amountInvested)/this.currentAmount;
  noOfHolding=22;
  isProfit=(this.currentAmount>this.amountInvested)?true:false;
  oneDayRetuns=-220;
  oneDayReturnsPercentage=(Math.abs(this.oneDayRetuns))/this.amountInvested;
  OneDay=(this.oneDayRetuns>0)?true:false;
  Username="User Name";
  Email="email123@email.com";
  mobileNo=9988776655;
  uDOB="12/12/12";
  maritalStatus="Single";
  Pan="XXXXX1111X";
}