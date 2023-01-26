import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  // déclaration des props qui viennent du parent
  @Input() route !: string;
  @Input() label !: string;
  @Input() styleBtn !: string;


  constructor() { }

  ngOnInit(): void {
  }

}
