import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-pagination',
  imports: [CommonModule, FormsModule, PaginationModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination{
  @Input() totalElements: number = 0;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<PageChangedEvent>();
}


