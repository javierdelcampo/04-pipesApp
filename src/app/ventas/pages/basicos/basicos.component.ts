import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'javier';
  nombreUpper: string = 'JAVIER';
  nombreFrase: string = 'jaViER dEl CamPO';

  fecha: Date = new Date();
  
}
