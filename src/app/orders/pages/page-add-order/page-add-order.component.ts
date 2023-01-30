import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  // créer un nouvel objet
  public item: Order = new Order();


  constructor(private ordersService : OrdersService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAdd(obj : Order): void {
    console.log(obj); // affiche l'objet envoyé depuis le formulaire
    // déclencher une méthode dans le service et lui passer l'objet
    this.ordersService.add(obj).subscribe((data) => {
      // console.log(res);
      // rediriger vers /orders
      this.router.navigate(['orders']);

    } )
  }

}
