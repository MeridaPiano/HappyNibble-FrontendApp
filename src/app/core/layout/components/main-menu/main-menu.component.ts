import { Component } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { routes } from '../../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  public menuItems = routes
    .map( route => route ?? [] )
    .flat()
    .filter( route => route && route.path );

}
