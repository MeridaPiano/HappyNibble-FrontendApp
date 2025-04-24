import { Component } from '@angular/core';
import { ImageGalleryComponent } from '../../components/image-gallery/image-gallery.component';
import ProductListComponent from '../../components/product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../interfaces/gallery-image.interface';
import { ModalComponent } from "../../../../shared/components/modal/modal.component";
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [ImageGalleryComponent, CommonModule, ProductListComponent, MenuComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export default class GalleryComponent {

  galleryFondant = [
    [
      { src: "assets\\images\\gallery\\fondant-cakes\\airplane.jpg", alt: "airplane", category: "fondant", title: "Aviónes", description: "Pastel de avión" },
      { src: "assets\\images\\gallery\\fondant-cakes\\bunny-moon.jpg", alt: "bunny-moon", category: "fondant", title: "Bunny Moon", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\harry-potter.jpg', alt: 'harry-potter', category: "fondant", title: "Harry Potter", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\wood-tools.jpg', alt: 'wood-tools', category: "fondant", title: "Herramientas", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\toy-story-2.jpg', alt: 'toy-story', category: "fondant", title: "Toy Sotry", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\sloth-coffee.jpg', alt: 'sloth-coffee', category: "fondant", title: "Perezoso", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\titanic.jpg', alt: 'titanic', category: "fondant", title: "Titánic", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\fondant-cakes\\unicorn-2.jpg', alt: 'unicorn', category: "fondant", title: "Unicornio", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\realistics-cakes\\apple-bag.jpg', alt: 'apple', category: "fondant", title: "Apple Bag", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\realistics-cakes\\hamburger.jpg', alt: 'hamburger', category: "fondant", title: "Hamburguesa", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\realistics-cakes\\rex.jpg', alt: 'rex', category: "fondant", title: "Tiranosaurio Rex", description: "Pastel de avión" },
    ],
    [
      { src: 'assets\\images\\gallery\\cream-cakes\\crepes-cake.jpg', alt: 'crepes-cake', category: "cream", title: "Crepas", description: "Pastel de avión" },
      { src: 'assets\\images\\gallery\\cream-cakes\\flowers.jpg', alt: 'flores-cake', category: "cream", title: "Flores", description: "Pastel de avión" },
    ],
    [
      { src: 'assets\\images\\gallery\\cupcakes\\anniversary.jpg', alt: 'anniversary', category: "cupcake", title: "Aniversario", description: "Cupcackes de Aniversario" },
      { src: 'assets\\images\\gallery\\cupcakes\\back-to-future.jpg', alt: 'back-to-future', category: "cupcake", title: "Back to Future", description: "Cupcackes de Aniversario" },
      { src: 'assets\\images\\gallery\\cupcakes\\beatles.jpg', alt: 'beatles', category: "cupcake", title: "The Beatles", description: "Cupcackes de The Neatles" },
      { src: 'assets\\images\\gallery\\cupcakes\\cream.jpg', alt: 'cream', category: "cupcake", title: "Crema", description: "Cupcackes de Aniversario" },
      { src: 'assets\\images\\gallery\\cupcakes\\fiances.jpg', alt: 'fiances', category: "cupcake", title: "Prometidos", description: "Cupcakes de Cumpleaños" },
      { src: 'assets\\images\\gallery\\cupcakes\\loki.jpg', alt: 'loki', category: "cupcake", title: "Loki", description: "Cupcackes de Aniversario" },
      { src: 'assets\\images\\gallery\\cupcakes\\mexican.jpg', alt: 'mexican', category: "cupcake", title: "Mexican", description: "Cupcackes de Aniversario" },
      { src: 'assets\\images\\gallery\\cupcakes\\pigs.jpg', alt: 'pigs', category: "cupcake", title: "Chanchitos", description: "Cupcackes de Aniversario" },
    ],[
      { src: 'assets\\images\\gallery\\cookies\\cookies.jpg', alt: 'galleta', category: "biscuit", title: "Galleta", description: "Galletas de Chocolate" },
      { src: 'assets\\images\\gallery\\cookies\\covered-1.jpg', alt: 'galleta', category: "biscuit", title: "Galleta Cubiertas", description: "Galletas Cubiertas" },
      { src: 'assets\\images\\gallery\\cookies\\kisses.jpg', alt: 'kisses', category: "biscuit", title: "Besos de Nuez", description: "Galletas de Nuez" },
      { src: 'assets\\images\\gallery\\cookies\\micky-christmast.jpg', alt: 'micky-mouse', category: "biscuit", title: "Micky Mouse", description: "Galletas de Navidad" },
    ]
  ]

  pageTitle: string |  undefined;
  pathActive: string | undefined;
  selectedProduct: GalleryImage | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.title.subscribe(title => {
      this.pageTitle = title;
    });
    this.route.url.subscribe(url => {
      this.pathActive = url.join('/'); 
    });
  }

  onImageSelected(image: GalleryImage): void {
    this.selectedProduct = image;
  }

  closeModal(outsideClick: boolean): void {
    this.selectedProduct = null;
    if (outsideClick) {
      console.log('Modal closed by clicking outside');
    } else {
      console.log('Modal closed by clicking the close button');
    }
  }
}
