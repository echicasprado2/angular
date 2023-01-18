import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-store';

  url:String = 'https://static.platzi.com/media/achievements/badge-angular-componentes-servicios-75f68ec3-48e0-430e-b7e2-889fad0d1984.png';

  onLoaded(url:String) {
    console.log('loaded parent',url)
  }


}
