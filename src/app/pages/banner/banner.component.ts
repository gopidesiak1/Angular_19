import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  images: string[]=[
    'images/b1.png',
    'images/b2.png',
    'images/b3.png'
  ]
timestamp: any;

}
