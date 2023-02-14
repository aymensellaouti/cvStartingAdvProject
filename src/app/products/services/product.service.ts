import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, tap } from 'rxjs';
import { ProductModel } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

const src1Formatter = (productSrc: any) =>
  productSrc.map(
    (product: any) =>
      new ProductModel(
        product.id,
        'https://fakestoreapi.com/products',
        product.title,
        product.price,
        product.description,
        product.category,
        product.image,
        product.rating.rate
      )
  );
const src2Formatter = (productSrc: any) => {
  productSrc.map(
    (product: any) =>
      new ProductModel(
        product.id,
        'https://dummyjson.com/products',
        product.title,
        product.price,
        product.description,
        product.category,
        product.images[0] ?? '',
        product.rating
      )
  );
};
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsSrc1$ = this.http.get('https://fakestoreapi.com/products').pipe(
    tap((products) =>
      console.log('products: https://fakestoreapi.com/products', products)
    ),
    map(src1Formatter)
  );
  productsSrc2$ = this.http
    .get<{ products: any }>('https://dummyjson.com/products')
    .pipe(
      map((res) => {
        console.log('res map', res);

        return res.products;
      }),
      map(src2Formatter)
    );
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return forkJoin<ProductModel[]>([this.productsSrc2$, this.productsSrc1$]);
  }
}
