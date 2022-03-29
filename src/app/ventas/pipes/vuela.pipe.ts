import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuelaPipe'
})

export class VuelaPipe implements PipeTransform {

    transform(valor: boolean ): string {
        return (valor) ? 'vuela' : 'no vuela';
    }
}