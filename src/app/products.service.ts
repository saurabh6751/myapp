import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://172.18.5.46:9898/products'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }
}
