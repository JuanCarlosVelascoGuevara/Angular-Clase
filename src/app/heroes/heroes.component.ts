import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { NgFor, UpperCasePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroeDetalleComponent } from '../heroe-detalle/heroe-detalle.component';
import {GestionarHeroesService} from '../servicios/gestionar-heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule,NgFor,NgIf,HeroeDetalleComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  heroes : Heroe[];
   selectedHeroe?: Heroe;

  constructor(private heroeServicio: GestionarHeroesService) {
    this.heroes= [];
 }

  getHeroes(): void {
     this.heroes = this.heroeServicio.getHeroes();
  }
   ngOnInit() {
      this.getHeroes();
  }
   onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
}
