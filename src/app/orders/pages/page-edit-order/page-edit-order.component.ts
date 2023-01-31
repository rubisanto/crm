import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public item!: Order;


  constructor(private activatedRoute : ActivatedRoute, private ordersService : OrdersService, private router: Router) {

    // extraire l'id de l'url
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id)


    // appel au service pour récupérer la commande avec subscribe
    this.ordersService.getItemById(id).subscribe((data) => {
      console.log(data);
      // placer data dans une propriété item
      this.item = data;
        console.log(this.item, 'item')
    })

    // remplir le formulaire avec les données de la commande
   }

   ngOnInit(): void {
  }

  onEdit(obj: Order) {
    this.ordersService.update(obj).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['orders']);
    })


  }
}
