import { Component } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
const PRODUCT_API = 'https://fakestoreapi.com/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  nbProduct = 0;
  products: Product[] = [];
  getProducts$!: Observable<Product[]>;
  updateProducts$ = new BehaviorSubject(true);
  constructor(private http: HttpClient) {
    this.getProducts$ = this.updateProducts$.pipe(
      switchMap(() => {
        return this.fetch();
      })
    );
    /*     this.getProducts$ = this.fetch(); */
  }
  update() {
    this.updateProducts$.next(true);
  }
  fetch(): Observable<Product[]> {
    const url =
      PRODUCT_API + (this.nbProduct ? `?limit=${this.nbProduct}` : '');
    this.http.get<Product[]>(url).subscribe({
      next: (products) => (this.products = products),
    });
    return this.http.get<Product[]>(url);
  }

  trackBy(index: number, product: Product) {
    return product.id;
  }
}
