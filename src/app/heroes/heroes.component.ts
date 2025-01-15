import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import {GestionarHeroesService} from '../servicios/gestionar-heroes.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgFor],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes?: Heroe[];

  constructor(private heroeServicio: GestionarHeroesService) { }

  getHeroes(): void {
     this.heroeServicio.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
   ngOnInit() {
      this.getHeroes();
  }
}
