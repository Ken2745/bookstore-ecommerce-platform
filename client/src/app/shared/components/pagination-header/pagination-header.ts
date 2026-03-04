import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pagination-header',
  imports: [CommonModule],
  templateUrl: './pagination-header.html',
  styleUrl: './pagination-header.scss',
})
export class PaginationHeader {
  @Input() totalElements: number = 0;
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
}