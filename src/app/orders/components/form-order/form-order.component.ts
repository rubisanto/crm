import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  // créer identifiant dans le TS de type FormGroup
  public form !: FormGroup

  public states = Object.values(StateOrder);

  @Input() init !: Order;




  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      // créer un objet
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [ this.init.client],
      comment: [this.init.comment],
      id: [this.init.id]


    })
  }

    // récupérer un objet et l'envoyer au back Order[]
    public onSubmit(): void {
      console.log(this.form.value);

      // envoyer this.form.value au parent

    }

}
