import { Injectable }   from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable,of }   from 'rxjs';
import { Heroe } from '../heroe';
import { LISTAHEROES } from '../prueba-heroes';
import { MensajesService } from './mensajes.service';

@Injectable()
  export class GestionarHeroesService {

  private serviceUrl = '/heroes.json';

  constructor(private mensajeServicio: MensajesService, private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    this.mensajeServicio.add('Servicio heores: recuperando heroes');
    return this.http.get<Heroe[]>(this.serviceUrl);
  }

  getHeroe(id: number): Observable<Heroe|undefined> {
    this.mensajeServicio.add(`Servicio heores: leyendo heroe con id=${id}`);
    let heroe=LISTAHEROES.find(heroe => heroe.id === id);
    return of(heroe);

}}

