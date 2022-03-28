import { Component, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Marta';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'saludarle',
    'femenino': 'saludarla'
  }
  saludoMapa = {
    'masculino': 'tío',
    'femenino': 'tía'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Marta', 'Francisco José II'];

  clientesMapping = {
    '=0': 'no tenemos clientes', 
    '=1': 'tenemos 1 cliente', 
    'other': 'tenemos ' + this.clientes.length + ' clientes'
  };

  cambiaNombre( nombre: string, genero: string ): void {
    console.log('Cambiando', this.nombre.trim(), 'por', nombre.trim(), '. De género ' + genero);
    this.nombre = nombre;
    this.genero = genero;
  }

  eliminaCliente (): void {
    console.log('Eliminando...');
    this.clientes.splice(this.clientes.length - 1, 1);
    this.clientesMapping['other'] = 'tenemos ' + this.clientes.length + ' clientes'; 
  }

  // KeyValue Pipe
  personal = {
    nombre: 'Javier',
    edad: 47,
    direccion: 'Madrid, ES'
  }
  
  //JSONPipe
  heroes = [
    {
      nombre: 'Superlópez',
      vuela: true
    },
    { 
      nombre: 'Supergarcía',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ]
  
  // Async Pipe
  miObservable = interval(1000); // ms

  valorPromesa = new Promise(( resolve, reject) => {

    setTimeout(() =>{
      resolve('Datos de promesa');
    }, 3500)
    
  });

}
