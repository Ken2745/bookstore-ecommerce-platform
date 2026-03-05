import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './core/nav-bar/nav-bar';

import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { SectionHeader } from './core/section-header/section-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, SectionHeader, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  title = 'BookStore';

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    //this.loadUser();
    this.loadBasket();
    this.accountService.loadUser();
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if (basketId) this.basketService.getBasket(basketId);
  }

  // loadUser(){
  //   this.accountService.loadUser();
  // }


}