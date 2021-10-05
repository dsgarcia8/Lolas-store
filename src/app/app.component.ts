import { Component } from '@angular/core';
//import { Product} from './product.model';
import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lola-store';
  

  imgParent = 'https://w3schools.com/howto/img_avatar.png'
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

  onLoaded(img: string){
    console.log('log padre', img)
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
}
