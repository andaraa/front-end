import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './productinterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/produk/');
  }
}
