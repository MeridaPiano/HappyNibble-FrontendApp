import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryImage } from '../../interfaces/gallery-image.interface';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  
  @Input() productDetail: GalleryImage | null = null;
  @Output() closeModal = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('ProductDetailComponent ngOnInit');
    console.log(this.productDetail);
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
