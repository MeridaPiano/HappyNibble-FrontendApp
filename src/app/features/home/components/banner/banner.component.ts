import { Component } from '@angular/core';
import { SlideItem } from '../../interfaces/slide.interface';

@Component({
  selector: 'banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  public slide: SlideItem[] = [
    {
      image: 'slide1.jpg',
      header: 'Happy Cakes for Happy Nibbles.',
      text: 'By Viry Bernal',
      button: {
        text: 'Subscribe',
        link: 'contact'
      }
    },
    {
      image: 'slide2.jpeg',
      header: 'Happy Cakes for Happy Nibbles2.',
      text: 'By Viry Bernal',
      button: {
        text: 'Subscribe2',
        link: 'contact'
      }
    },
    {
      image: 'slide3.jpeg',
      header: 'Happy Cakes for Happy Nibbles3.',
      text: 'By Viry Bernal',
      button: {
        text: 'Subscribe3',
        link: 'contact'
      }
    },
  ]
}
