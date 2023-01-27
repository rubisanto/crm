import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})

// directive = manipuler les attributs d'un élément html


export class StateDirective {



  @Input() etat !: string;
  // récupérer l'attribut class de l'élément html
  // hostbiding pour cibler un attribut dans le html
  @HostBinding('class') tdClassName!: string;

  constructor() {
    console.log('directive');
  }

  ngOnChanges(): void {
    console.log(this.etat);


    this.tdClassName =
    // mettre l'etat en lower case
    `state-${this.etat.replace(/\s/g, '').toLowerCase()}`
    console.log(this.tdClassName);

  }


}
