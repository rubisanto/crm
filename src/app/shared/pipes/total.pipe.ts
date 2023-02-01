import { Pipe, PipeTransform } from '@angular/core';

// decorateur
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  // ne pas toucher à la signature de la méthode transform
  transform(val: number, coef: number, tva?: number): number {
    // méthode pour calculer le total HT
    if(tva){
      return val * coef * (1 + tva / 100);
    }
    // si pas tva
    return  val * coef;

  }



}
