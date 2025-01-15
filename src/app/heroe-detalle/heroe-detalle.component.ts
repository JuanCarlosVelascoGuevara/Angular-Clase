import { NgIf, UpperCasePipe } from '@angular/common';
import { Component,  Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroe-detalle',
  standalone:true,
  imports:[FormsModule,NgIf,UpperCasePipe],
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})

export class HeroeDetalleComponent {
  @Input() heroe?: Heroe;
}
