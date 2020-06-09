import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Subscription} from "rxjs";
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'date', 'sku', 'weight', 'height', 'width', 'origin', 'minimum', 'delay'];
  dataSource = new MatTableDataSource<Product>()

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.dataSource.data = this.productsService.fetchProducts();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
