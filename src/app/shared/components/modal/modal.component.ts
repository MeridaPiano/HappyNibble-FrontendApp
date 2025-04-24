import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'generic-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: 'confirmation' | 'error' | 'warning' = 'confirmation'; // Type of modal
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  onClose(): void {
    this.closeModal.emit(false); // Emit false when closed by button
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeModal.emit(true); // Emit true when closed by outside click
    }
  }
}
