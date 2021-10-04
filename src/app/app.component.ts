import { Component } from '@angular/core';
import { Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lola-store';
  img = 'https://source.unsplash.com/random/300x200'
  name = 'Daniela'
  age = 23
  btnDisabled = true 
  person = {
    name: "Valeria",
    age: 21,
    avatar: 'https://source.unsplash.com/random/300x200'
  }
  names: String[] = ['Dani','Vale', 'Fanny']
  newName=""
  register = {
    name: '',
    email: '',
    password: ''
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }
  products: Product[] = [
    {
      name: 'Perls Diadem',
      price: 15,
      image: './assets/images/hair.jpeg',
      category: 'all',
    },
    {
      name: 'Handmade masks',
      price: 5,
      image: './assets/images/mask.jpeg'
    },
    {
      name: 'White handmade necklace',
      price: 12,
      image: './assets/images/necklace.jpeg'
    },
    {
      name: 'Handmade Jewerly set',
      price: 23,
      image: './assets/images/necklace2.jpeg'
    },
    {
      name: 'Scrunchies set',
      price: 6,
      image: './assets/images/scrunchies.jpeg'
    },
    {
      name: 'Lolas Scrunchie',
      price: 2,
      image: './assets/images/scrunchie2.jpeg'
    }
  ]
}
