import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  // créer prop alimenté par le parent @Input()
  @Input() title !:string ;

  constructor() { }

  ngOnInit(): void {
  }

}
