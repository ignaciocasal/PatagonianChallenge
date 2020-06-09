import { Injectable } from '@angular/core';
// @ts-ignore
import comprasJson from '../../assets/data/compras.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  fetchProducts() {
    return comprasJson
  }
}
