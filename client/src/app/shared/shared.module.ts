import { NgModule } from '@angular/core';
//import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeader } from './components/pagination-header/pagination-header';
import { Pagination } from './components/pagination/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderSummary } from './components/order-summary/order-summary';

@NgModule({
  declarations: [
    PaginationHeader,
    Pagination,
    OrderSummary
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
   // MatInputModule
  ],exports:[
    PaginationModule,
    PaginationHeader,
    Pagination,
    CarouselModule,
    OrderSummary,
    FormsModule,
    ReactiveFormsModule,
   // MatInputModule
  ]
})
export class SharedModule { }