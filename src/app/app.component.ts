import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MensajesComponent } from "./mensajes/mensajes.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MensajesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'angular-gestion-de-heroes';
}
