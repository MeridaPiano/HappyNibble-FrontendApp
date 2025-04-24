import { Component, Input } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { GalleryImage } from '../../interfaces/gallery-image.interface';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export default class ProductListComponent {

  @Input() product: GalleryImage | null = null;
}
