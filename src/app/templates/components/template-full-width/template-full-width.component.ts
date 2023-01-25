import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {
  // créer prop alimenté par le parent @Input()
  @Input() title !:string ;

  constructor() {
    console.log(this.title, "constructor");
  }

  ngOnInit(): void {
    console.log(this.title, "ngOnInit");
  }

  ngOnChanges(arg: SimpleChanges) {
    console.log(arg, "ngOnChanges");
  }

  // quand le composant est détruit
  ngOnDestroy() {
    console.log(this.title, "ngOnDestroy");
    // garder en mémoire des infos

  }




}
