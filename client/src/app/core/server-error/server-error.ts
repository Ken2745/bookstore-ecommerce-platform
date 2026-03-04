import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-server-error',
  imports: [CommonModule],
  templateUrl: './server-error.html',
  styleUrl: './server-error.scss',
})
export class ServerError {}
