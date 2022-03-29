import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    toggleDefecto: boolean = true;

    transform(valor: string, enMayusculas: boolean = this.toggleDefecto ): string {
        //if (enMayusculas) { 
        //    return valor.toUpperCase() 
        //} else {
        //    return valor.toLowerCase()
        //};
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
}