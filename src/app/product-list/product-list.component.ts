import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []
  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service
      .getProducts()
        .subscribe( response => {
          if (response['status'] === 'success') {
            this.products = response['data'] as any[]
          }else {
            console.log('error', response['error'])
          }
        })
  }

}
