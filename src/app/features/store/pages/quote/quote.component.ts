import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export default class QuoteComponent {
  productos: string[] = [
    'Pastel',
    'Galletas',
    'Cupcackes',
    'Mesa de dulces',
    'Catering',
  ];

  pasteles: string[] = [
    'Crema',
    'Fondant'
  ];

  tipoDisenios: string[] = [
    'Personalizado',
    'Especialidad',
    'Gourmet',
  ];
}
