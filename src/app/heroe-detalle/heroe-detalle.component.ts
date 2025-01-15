import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { Heroe }  from '../heroe';
import { GestionarHeroesService }  from '../servicios/gestionar-heroes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroe-detalle',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,NgIf],
  templateUrl: './heroe-detalle.component.html',
  styleUrls: [ './heroe-detalle.component.css' ]
})
export class HeroeDetalleComponent {
  heroe: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private gestionarHeroesService: GestionarHeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => this.getHeroe());
  }

  getHeroe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gestionarHeroesService.getHeroe(id)
      .subscribe(heroe => this.heroe = heroe);
  }

  goBack(): void {
    this.location.back();
  }
}