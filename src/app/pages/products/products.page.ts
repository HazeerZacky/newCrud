import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  product:Products = {
    'name' :'',
    'description': '',
    'price':null
  }

  constructor(private data: DataserviceService) { }

  ngOnInit() {
  }
  save(){
    
    this.data.addProduct(this.product);
  }

}
