import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

/* Tuve problemas para el routing, presionaba los links pero no realizaba ninguna acción. Se soluciono añadiendo RouterLink y RouterModule aunque parezca que realmente no hace nada.
De cualquier forma, no lo eliminare. */

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
