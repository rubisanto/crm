import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  // initialiser prorpiété pour l'event
@Output() submited: EventEmitter<Order> = new EventEmitter<Order>();


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      // créer un objet
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, [Validators.required], [Validators.minLength(2), Validators.maxLength(100)]],
      client: [ this.init.client, [Validators.required], [Validators.minLength(2), Validators.maxLength(100)]],
      comment: [this.init.comment],
      id: [this.init.id]


    })
  }

    // récupérer un objet et l'envoyer au back Order[]
    public onSubmit(): void {
      // console.log(this.form.value);

      // envoyer this.form.value au parent
      this.submited.emit(this.form.value);

    }

}


