import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../interfaces/gallery-image.interface';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {

  @Input() galleryList: GalleryImage[][] = []
  @Input() pathActive: string | undefined;
  @Output() selectedImage = new EventEmitter<GalleryImage>();


  
  openModal(product: GalleryImage): void {
    this.selectedImage.emit(product);
  }

}
