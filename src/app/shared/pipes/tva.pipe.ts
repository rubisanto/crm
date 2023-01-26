import { Pipe, PipeTransform } from '@angular/core';

// decorateur
@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  // ne pas toucher à la signature de la méthode transform
  transform(val: number, tva: number): unknown {
    // calculer le ttc
      return val  * (1 + tva / 100);


  }



}
