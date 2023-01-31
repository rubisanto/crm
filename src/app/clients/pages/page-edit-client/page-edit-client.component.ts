import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/orders/services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public item!: Client;

  constructor(private activatedRoute : ActivatedRoute, private clientsService : ClientsService, private router : Router) {
    // extraire l'id de l'url
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(typeof id)


    // appel au service pour récupérer la commande avec subscribe
    this.clientsService.getItemById(id).subscribe((data) => {
      console.log(data);
      // placer data dans une propriété item
      this.item = data;
        console.log(this.item, 'item')
    })

    // remplir le formulaire avec les données de la commande
   }


  ngOnInit(): void {

  }
  onEdit(obj: Client) {
    this.clientsService.update(obj).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['clients']);
    })


  }

}
