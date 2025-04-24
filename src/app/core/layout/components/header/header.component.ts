import { Component, EventEmitter, Output } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [
    MainMenuComponent,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
