import { Component } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private service:StocksService){}
  // amountInvested=200500;
  // currentAmount=268000.8596;
  // totalReturns=this.currentAmount-this.amountInvested;
  // totalReturnsPercent=(this.currentAmount-this.amountInvested)/this.currentAmount;
  // noOfHolding=22;
  // isProfit=(this.currentAmount>this.amountInvested)?true:false;
  // oneDayRetuns=-220;
  // oneDayReturnsPercentage=(Math.abs(this.oneDayRetuns))/this.amountInvested;
  // OneDay=(this.oneDayRetuns>0)?true:false;
  // Username="User Name";
  // Email="email123@email.com";
  // mobileNo=9988776655;
  // uDOB="12/12/12";
  // maritalStatus="Single";
  // Pan="XXXXX1111X";
  amountInvested=this.service.amountInvested;
  currentAmount=this.service.currentAmount;
  totalReturns=this.service.currentAmount-this.service.amountInvested;
  totalReturnsPercent=(this.service.currentAmount-this.service.amountInvested)/this.service.currentAmount;
  noOfHolding=this.service.noOfHolding;
  isProfit=(this.currentAmount>this.amountInvested)?true:false;
  oneDayRetuns=this.service.oneDayRetuns;
  oneDayReturnsPercentage=(Math.abs(this.oneDayRetuns))/this.amountInvested;
  OneDay=(this.oneDayRetuns>0)?true:false;
  Username=this.service.Username;
  Email=this.service.Email;
  mobileNo=this.service.mobileNo;
  uDOB=this.service.uDOB;
  maritalStatus=this.service.maritalStatus;
  Pan=this.service.Pan;
}
