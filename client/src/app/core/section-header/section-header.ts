import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section-header',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {}

// export class SectionHeaderComponent {
//   constructor(public breadCrumbService: BreadcrumbService){}
// }