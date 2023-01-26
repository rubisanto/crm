import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  // prop pour retrouver collection du parent
  // utiliserr une propriété qui vient du parent
  @Input() collection !: Order[]
  // en tete du tableau
  @Input() headers !: string[];


  constructor() { }

  ngOnInit(): void {
    console.log(this.collection, 'ngOnInit');
  }

}
