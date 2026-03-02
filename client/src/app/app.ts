import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { BasketService } from './basket/basket.service';
// import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client');
}

// export class App implements OnInit {
//   // title = 'BookStore';

//   // constructor(
//   //   private basketService: BasketService,
//   //   private accountService: AccountService
//   // ) {}

//   // ngOnInit() {
//   //   this.loadUser();
//   //   this.loadBasket();
//   // }

//   // loadBasket(){
//   //   const basketId = localStorage.getItem('basket_id');
//   //   if (basketId) this.basketService.getBasket(basketId);
//   // }

//   // loadUser(){
//   //   this.accountService.loadUser();
//   // }


// }