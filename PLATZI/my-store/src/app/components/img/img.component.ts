import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input('myImage') imgSrc:String = '';
  @Output() loaded = new EventEmitter();

  defaultValue:String = './../assets/images/defaultImage.png';

  imgError(): void {
    this.imgSrc = this.defaultValue;
  }

  imgLoaded(){
    console.log("loaded child");
    this.loaded.emit(this.imgSrc)
  }

}
