import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit , OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpeg'

  constructor() { 
    
  }
  ngOnChanges() {
    console.log('ngOnChanges', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  
  ngAfterViewInit(){
    //despues de renderizarse
    //se manejan los hijos 
    console.log('ngAfterViewInit')

  }

  ngOnDestroy(){
    console.log('ngOnDestroy')

  }

  imgError(){
    this.img = this.imageDefault;
  }
  
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }


}
