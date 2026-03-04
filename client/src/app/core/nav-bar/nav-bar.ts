import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { BasketService } from '../../basket/basket.service';
import { BasketItem } from '../../shared/models/basket';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})

export class NavBar implements OnInit {
  currentUser$?: Observable<User | null>;  
  constructor(
    public basketService: BasketService,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;  
  }

  getItemsCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
  logout() {
    this.accountService.logout();
  }
}
