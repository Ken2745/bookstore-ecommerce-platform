import { Component } from '@angular/core';
import { AccountService } from '../account.service'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  constructor(public accountService: AccountService) {}
}
