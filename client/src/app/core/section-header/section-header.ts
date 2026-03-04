import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {BreadcrumbService, BreadcrumbComponent, BreadcrumbItemDirective} from 'xng-breadcrumb';

@Component({
  standalone: true,
  selector: 'app-section-header',
  imports: [
    CommonModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective
  ],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  constructor(public breadCrumbService: BreadcrumbService) {}
}