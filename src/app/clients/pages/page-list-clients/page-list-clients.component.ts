import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/orders/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public states = Object.values(StateClient);

  public titleParent: string = "Liste des clients";

  public collection!: Client[];

  public headers : string[] = [
    'Action',
    'State',
    'TVA',
    'id',
    'name',
    'totalCaHt',
    'totalCaTtc',
    'comment',
  ];

  constructor(private clientsService : ClientsService) {
    this.clientsService.collection.subscribe((data) => {
      this.collection = data;
    });
   }

  ngOnInit(): void {
  }

}
