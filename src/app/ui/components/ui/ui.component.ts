import { Component, OnInit } from '@angular/core';

// décorateur
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  // créer une propriété booléenne
  public open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    // faire alterner la valeur de open
    this.open = !this.open;


  }
}
