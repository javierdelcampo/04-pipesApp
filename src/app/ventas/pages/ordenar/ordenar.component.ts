import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  toggleDefecto: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superlópez',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Supergarcía',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Super Ratón',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Capitán Sevilla',
      vuela: true,
      color: Color.negro
    }
    ];

  heroes2: Heroe[] = [...this.heroes];

  toggleMayusculas(): void {
    this.toggleDefecto = !this.toggleDefecto;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
