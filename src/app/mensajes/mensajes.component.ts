import { Component } from '@angular/core';
import { MensajesService } from '../servicios/mensajes.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  imports:[NgIf,NgFor],
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})

export class MensajesComponent {
  constructor(public miServicio: MensajesService) { }
}