import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/orders/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  // déclarer une propriété et stocker l'enum et le mettre en tableau
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

  constructor(private clientsService : ClientsService, private router : Router) {
    this.clientsService.collection.subscribe((data) => {
      this.collection = data;
    });
   }

  ngOnInit(): void {
  }

  // méthode formulaire
  public changeState( item: Client, event: Event) {
    console.log(event)
    // as pour typer la variable
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;

    // item.state = data

    // envoyer un objet modifié
    this.clientsService.changeState(item, state).subscribe((data) => {
      // éviter les égalités
      // éviter des objets = objets
      Object.assign(item, data);

    }
    );

  }

  public goToEdit(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
  }
}
