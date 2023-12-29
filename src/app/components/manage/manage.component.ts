import { Component } from '@angular/core';

import { StocksService } from '../../services/stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>=[];
  stock: string = '';

  constructor(private service: StocksService,private router:Router) {
    this.symbols = service.get();
  }

  add() {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol: string) {
    this.symbols = this.service.remove(symbol);
  }
  addStocks(sock:any){
    this.symbols.push(this.stock.toUpperCase())
    this.router.navigate(['/add-stocks']);
  }
}