import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  public form !: FormGroup;

  public states = Object.values(StateClient);

  @Input() init !: Client;

   @Output() submited: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      // créer un objet
      state: [this.init.state],
      id: [this.init.id],
      tva: [this.init.tva],
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment],

    })
  }

  public onSubmit(): void {
    // console.log(this.form.value);

    // envoyer this.form.value au parent
    this.submited.emit(this.form.value);

  }


}
