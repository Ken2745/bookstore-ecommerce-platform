import { Component } from '@angular/core';

// import { Observable } from 'rxjs';
// import { AccountService } from 'src/app/account/account.service';
// import { BasketService } from 'src/app/basket/basket.service';
// import { Basket, BasketItem } from 'src/app/shared/models/basket';
// import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar{}

// export class NavBar implements OnInit {
//   currentUser$?: Observable<User | null>;  
//   constructor(
//     public basketService: BasketService,
//     public accountService: AccountService
//   ) {}

//   ngOnInit(): void {
//     this.currentUser$ = this.accountService.currentUser$;  
//   }

//   getItemsCount(items: BasketItem[]) {
//     return items.reduce((sum, item) => sum + item.quantity, 0);
//   }
//   logout() {
//     this.accountService.logout();
//   }
// }
