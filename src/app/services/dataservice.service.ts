import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private firestore: AngularFirestore,
    private router: Router) { }

  addProduct(product: Products){
   this.firestore.collection<any>('product').add(product).then(() =>{
      this.router.navigateByUrl('home');
   })
    
  }

  getProduct(){
    return this.firestore.collection<any>(`product`).valueChanges()
  }
}
