import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface CakePan {
  id: number; 
  name: string;
  description: string;
  imageUrl?: string;
  price?: number; 
}

export interface Relleno {
  id: number; 
  name: string;
  description: string;
  imageUrl?: string;
  price?: number; 
}

export interface Cubierta {
  id: number; 
  name: string;
  description: string;
  imageUrl?: string;
  price?: number; 
}

export interface Especialidades {
  id: number; 
  name: string;
  description: string;
  imageUrl?: string;
  price?: number; 
}


@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  cakePan:CakePan[] = [
    {id:1, name:"Chocolate Intenso", description:"Bizcocho húmedo con cacao puro, perfecto para los amantes del chocolate"},
    {id:2, name:"Vainilla Clásica", description:"Suave y esponjoso, la base tradicional para cualquier celebración"},
    {id:3, name:"Marmoleado Delicado", description:"La unión perfecta de vainilla y chocolate en cada bocado"},
    {id:4, name:"Red Velvet Apasionado", description:"Terciopelo rojo con un sutil toque de cacao y un ligero matiz ácido"},
  ]
  relleno: Relleno[] = [
    {id:1, name:"Frutos Rojos Silvestres", description:"Una explosión de sabor agridulce con fresas, frambuesas y arándanos frescos"},
    {id:2, name:"Ganache de Chocolate Belga", description:"Cremoso y decadente, elaborado con el mejor chocolate belga"},
    {id:3, name:"Nuez Caramelizada Crocante", description:"Un relleno con trozos de nuez tostada en un suave caramelo"},
    {id:4, name:"Dulce de Leche Artesanal", description:"Un clásico irresistible con la dulzura perfecta"},
  ]

  cubierta: Cubierta[]=[
    {id:1, name:"Glaseado Clásico", description:"Un acabado dulce y brillante, ideal para realzar la belleza del pastel"},
    {id:2, name:"Crema de Mantequilla Suave", description:"Ligera y aireada, perfecta para decoraciones detalladas"},
    {id:3, name:"Crema de Queso Frosting", description:"Un equilibrio delicioso entre dulce y ligeramente ácido"},
    {id:4, name:"Ganache de Chocolate Oscuro", description:"Una cubierta intensa y brillante para los amantes del chocolate puro"},
  ]

  especialidades: Especialidades[] = [
    {id:1, name:"Selva Negra Encantada", description:"Bizcocho de chocolate intenso, relleno de cerezas al kirsch y crema chantilly, cubierta de virutas de chocolate"},
    {id:2, name:"Beso de Ángel Celestial", description:"Bizcocho de vainilla clásica, relleno de frutos rojos silvestres y crema de queso frosting"},
    {id:3, name:"Tentación de Nuez", description:"Bizcocho marmoleado, relleno de dulce de leche artesanal y nuez caramelizada, cubierta de crema de mantequilla suave"},
    {id:4, name:"Pasión de Chocolate", description:"Bizcocho de chocolate intenso, relleno de ganache de chocolate belga y cubierta de ganache de chocolate oscuro"},
  ]
}
