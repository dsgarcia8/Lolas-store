import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {StoreService} from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];

  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Perls Diadem',
      price: 15,
      image: './assets/images/hair.jpeg',
  
    },
    {
      id: '2',
      name: 'Handmade masks',
      price: 5,
      image: './assets/images/mask.jpeg'
    },
    {
      id: '3',
      name: 'White handmade necklace',
      price: 12,
      image: './assets/images/necklace.jpeg'
    },
    {
      id: '4',
      name: 'Handmade Jewerly set',
      price: 23,
      image: './assets/images/necklace2.jpeg'
    },
    {
      id: '5',
      name: 'Scrunchies set',
      price: 6,
      image: './assets/images/scrunchies.jpeg'
    },
    {
      id: '6',
      name: 'Lolas Scrunchie',
      price: 2,
      image: './assets/images/scrunchie2.jpeg'
    }
  ]

  constructor(private storeService: StoreService) { 
    this.myShoppingCart = this.storeService.getShoppinCart();
  }

  

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()

  }

}
