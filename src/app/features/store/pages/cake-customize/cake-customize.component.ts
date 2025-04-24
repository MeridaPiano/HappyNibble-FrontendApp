import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cake-customize',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './cake-customize.component.html',
  styleUrl: './cake-customize.component.css'
})
export default class CakeCustomizeComponent {
  tipoPasteles: string[] = [
    'Fondant',
    'Crema',
  ];

  panes: string[] = [
    'Chocolate',
    'Marmolado',
    'Vainilla',
  ];

  rellenos: string[] = [
    'Frutos Rojos',
    'Ganash Chocolate',
    'Pistache',
  ];
}
