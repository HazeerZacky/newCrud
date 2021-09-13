import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products : Array<any>;

  constructor(private route: Router,
    private data: DataserviceService) { 
     
      this.data.getProduct().subscribe(res => {
     
        this.products = res;
        console.log(this.products);
        
        
        
      });
    }

  ngOnInit() {
    
  }
  ngAfterViewinit(){
    
   
  }

  create(){
    this.route.navigateByUrl('products');
  }
  delete(){
    console.log('delete');
    
  }

}
