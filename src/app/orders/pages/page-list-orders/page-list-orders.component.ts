import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  // déclarer une propriété et stocker l'enum et le mettre en tableau
  public states = Object.values(StateOrder);

  public titleParent: string = "Liste des commandes";

  // prop pour stocker data
  public collection!: Order[]

  // en tete du tableau
  public headers : string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];



  constructor(private ordersService : OrdersService) {
    // déclencher la prop collection du service + afficher data dans console
    this.ordersService.collection.subscribe((data) => {

      this.collection = data;


    }
    );
  }

  ngOnInit(): void {
  }

  // méthode formulaire
  public changeState( item: Order, event: Event) {
    console.log(event)
    // as pour typer la variable
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;

    // item.state = data

    // envoyer un objet modifié
    this.ordersService.changeState(item, state).subscribe((data) => {
      // éviter les égalités
      // éviter des objets = objets
      Object.assign(item, data);

    }
    );


  }



}
